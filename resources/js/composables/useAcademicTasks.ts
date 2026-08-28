import { computed, onMounted, ref } from 'vue';

export type TaskPriority = 'Low' | 'Medium' | 'High';

export type AcademicTask = {
    id: number;
    title: string;
    course: string;
    dueDate: string;
    priority: TaskPriority;
    completed: boolean;
};

export type TaskDraft = {
    title: string;
    course: string;
    dueDate: string;
    priority: string;
};

const storageKey = 'cos106AcademicTasks';
const allowedPriorities: TaskPriority[] = ['Low', 'Medium', 'High'];

function getTodayDateValue() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function getDueDateTime(dateValue: string) {
    const dueDate = new Date(`${dateValue}T00:00:00`);

    return Number.isNaN(dueDate.getTime())
        ? Number.MAX_SAFE_INTEGER
        : dueDate.getTime();
}

function normalizeTask(task: unknown): AcademicTask | null {
    if (!task || typeof task !== 'object') {
        return null;
    }

    const candidate = task as Partial<AcademicTask>;
    const normalized = {
        id: Number(candidate.id) || Date.now(),
        title: String(candidate.title || '').trim(),
        course: String(candidate.course || '').trim(),
        dueDate: String(candidate.dueDate || '').trim(),
        priority: allowedPriorities.includes(candidate.priority as TaskPriority)
            ? (candidate.priority as TaskPriority)
            : 'Low',
        completed: Boolean(candidate.completed),
    };

    return normalized.title && normalized.course && normalized.dueDate
        ? normalized
        : null;
}

export function useAcademicTasks() {
    const tasks = ref<AcademicTask[]>([]);
    const todayDateValue = getTodayDateValue();

    const sortedTasks = computed(() =>
        [...tasks.value].sort((firstTask, secondTask) => {
            if (firstTask.completed !== secondTask.completed) {
                return (
                    Number(firstTask.completed) - Number(secondTask.completed)
                );
            }

            return (
                getDueDateTime(firstTask.dueDate) -
                getDueDateTime(secondTask.dueDate)
            );
        }),
    );

    const completedCount = computed(
        () => tasks.value.filter((task) => task.completed).length,
    );
    const remainingCount = computed(
        () => tasks.value.length - completedCount.value,
    );

    function loadTasks() {
        try {
            const storedTasks = JSON.parse(
                localStorage.getItem(storageKey) || '[]',
            );

            if (!Array.isArray(storedTasks)) {
                tasks.value = [];

                return;
            }

            tasks.value = storedTasks
                .map(normalizeTask)
                .filter((task): task is AcademicTask => task !== null);
        } catch {
            localStorage.removeItem(storageKey);
            tasks.value = [];
        }
    }

    function saveTasks() {
        localStorage.setItem(storageKey, JSON.stringify(tasks.value));
    }

    function validateTask(draft: TaskDraft) {
        const title = draft.title.trim();
        const course = draft.course.trim();
        const dueDate = draft.dueDate;
        const priority = draft.priority;

        if (!title || !course || !dueDate || !priority) {
            return {
                isValid: false as const,
                message:
                    'Please complete all task fields before adding a task.',
                invalidFields: {
                    title: !title,
                    course: !course,
                    dueDate: !dueDate,
                    priority: !priority,
                },
            };
        }

        if (title.length < 3) {
            return {
                isValid: false as const,
                message: 'Task title must be at least 3 characters.',
                invalidFields: { title: true },
            };
        }

        if (course.length < 3) {
            return {
                isValid: false as const,
                message: 'Course or subject must be at least 3 characters.',
                invalidFields: { course: true },
            };
        }

        if (dueDate < todayDateValue) {
            return {
                isValid: false as const,
                message: 'Due date cannot be earlier than today.',
                invalidFields: { dueDate: true },
            };
        }

        if (!allowedPriorities.includes(priority as TaskPriority)) {
            return {
                isValid: false as const,
                message: 'Please choose a valid priority.',
                invalidFields: { priority: true },
            };
        }

        return {
            isValid: true as const,
            task: {
                id: Date.now(),
                title,
                course,
                dueDate,
                priority: priority as TaskPriority,
                completed: false,
            },
        };
    }

    function addTask(task: AcademicTask) {
        tasks.value = [...tasks.value, task];
        saveTasks();
    }

    function toggleTask(taskId: number) {
        tasks.value = tasks.value.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task,
        );
        saveTasks();
    }

    function deleteTask(taskId: number) {
        tasks.value = tasks.value.filter((task) => task.id !== taskId);
        saveTasks();
    }

    function formatDueDate(dateValue: string) {
        const dueDate = new Date(`${dateValue}T00:00:00`);

        if (Number.isNaN(dueDate.getTime())) {
            return 'Date unavailable';
        }

        return dueDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    }

    onMounted(loadTasks);

    return {
        tasks,
        sortedTasks,
        completedCount,
        remainingCount,
        todayDateValue,
        validateTask,
        addTask,
        toggleTask,
        deleteTask,
        formatDueDate,
    };
}
