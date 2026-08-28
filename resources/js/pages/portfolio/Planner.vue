<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { nextTick, reactive, ref } from 'vue';
import type { TaskDraft } from '@/composables/useAcademicTasks';
import { useAcademicTasks } from '@/composables/useAcademicTasks';
import { useScrollReveal } from '@/composables/useScrollReveal';

useScrollReveal();

const {
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
} = useAcademicTasks();

const form = reactive<TaskDraft>({
    title: '',
    course: '',
    dueDate: '',
    priority: '',
});

const invalidFields = reactive<Record<string, boolean>>({
    title: false,
    course: false,
    dueDate: false,
    priority: false,
});

const formMessage = ref('');
const formMessageType = ref<'error' | 'success' | ''>('');
const titleInput = ref<HTMLInputElement | null>(null);

function setFormMessage(message: string, type: 'error' | 'success' | '') {
    formMessage.value = message;
    formMessageType.value = type;
}

function clearInvalidFields() {
    Object.keys(invalidFields).forEach((field) => {
        invalidFields[field] = false;
    });
}

function handleSubmit() {
    clearInvalidFields();
    const result = validateTask(form);

    if (!result.isValid) {
        Object.entries(result.invalidFields).forEach(([field, value]) => {
            invalidFields[field] = value;
        });
        setFormMessage(result.message, 'error');

        return;
    }

    addTask(result.task);
    form.title = '';
    form.course = '';
    form.dueDate = '';
    form.priority = '';
    setFormMessage('Task added.', 'success');
    nextTick(() => titleInput.value?.focus());
}
</script>

<template>
    <Head title="Academic Planner | Anya Chidiebere" />

    <main class="wrapper planner-wrapper">
        <section class="planner-intro" aria-labelledby="planner-title">
            <p class="section-kicker">Stay Organised</p>
            <h1 id="planner-title">Academic Planner</h1>
            <p>
                Organize assignments, study goals, deadlines, and other academic
                tasks in one place.
            </p>
        </section>

        <section class="planner-panel" aria-label="Task planner controls">
            <form
                class="task-form"
                id="task-form"
                novalidate
                @submit.prevent="handleSubmit"
            >
                <div class="form-field">
                    <label for="task-title">Task Title</label>
                    <input
                        id="task-title"
                        ref="titleInput"
                        v-model="form.title"
                        type="text"
                        name="taskTitle"
                        placeholder="e.g. Complete COS 106 project"
                        :aria-invalid="invalidFields.title"
                        @input="invalidFields.title = false"
                    />
                </div>
                <div class="form-field">
                    <label for="task-course">Course or Subject</label>
                    <input
                        id="task-course"
                        v-model="form.course"
                        type="text"
                        name="taskCourse"
                        placeholder="e.g. COS 106"
                        :aria-invalid="invalidFields.course"
                        @input="invalidFields.course = false"
                    />
                </div>
                <div class="form-field">
                    <label for="task-due-date">Due Date</label>
                    <input
                        id="task-due-date"
                        v-model="form.dueDate"
                        type="date"
                        name="taskDueDate"
                        :min="todayDateValue"
                        :aria-invalid="invalidFields.dueDate"
                        @input="invalidFields.dueDate = false"
                    />
                </div>
                <div class="form-field">
                    <label for="task-priority">Priority</label>
                    <select
                        id="task-priority"
                        v-model="form.priority"
                        name="taskPriority"
                        :aria-invalid="invalidFields.priority"
                        @change="invalidFields.priority = false"
                    >
                        <option value="">Select priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <p
                    id="task-form-message"
                    class="form-message"
                    :class="{
                        'is-error': formMessageType === 'error',
                        'is-success': formMessageType === 'success',
                    }"
                    aria-live="polite"
                >
                    {{ formMessage }}
                </p>
                <button class="planner-button" type="submit">Add Task</button>
            </form>

            <div class="task-summary" aria-label="Task summary">
                <div class="summary-item">
                    <span>Total Tasks</span>
                    <strong id="total-tasks">{{ tasks.length }}</strong>
                </div>
                <div class="summary-item">
                    <span>Completed</span>
                    <strong id="completed-tasks">{{ completedCount }}</strong>
                </div>
                <div class="summary-item">
                    <span>Remaining</span>
                    <strong id="remaining-tasks">{{ remainingCount }}</strong>
                </div>
            </div>
        </section>

        <section class="task-section" aria-labelledby="task-list-title">
            <div class="task-section-heading">
                <h2 id="task-list-title">Tasks</h2>
            </div>
            <div
                id="empty-state"
                class="empty-state"
                :class="{ 'is-hidden': tasks.length > 0 }"
            >
                <h3>No tasks yet</h3>
                <p>Add your first academic task using the form above.</p>
            </div>
            <ul id="task-list" class="task-list" aria-live="polite">
                <li
                    v-for="task in sortedTasks"
                    :key="task.id"
                    class="task-item"
                    :class="{ 'is-completed': task.completed }"
                    :data-task-id="task.id"
                >
                    <div class="task-content">
                        <h3 class="task-title">{{ task.title }}</h3>

                        <div class="task-meta">
                            <span class="task-course">{{ task.course }}</span>
                            <time :datetime="task.dueDate">
                                Due {{ formatDueDate(task.dueDate) }}
                            </time>
                        </div>

                        <div class="task-badges">
                            <span class="priority-label">
                                {{ task.priority }} Priority
                            </span>
                            <span class="task-state">
                                {{ task.completed ? 'Completed' : 'Pending' }}
                            </span>
                        </div>
                    </div>

                    <div class="task-actions">
                        <button
                            class="task-action complete-action"
                            type="button"
                            data-action="toggle"
                            :aria-label="
                                task.completed
                                    ? `Mark ${task.title} as incomplete`
                                    : `Mark ${task.title} as complete`
                            "
                            @click="toggleTask(task.id)"
                        >
                            {{ task.completed ? 'Undo' : 'Mark Complete' }}
                        </button>
                        <button
                            class="task-action delete-action"
                            type="button"
                            data-action="delete"
                            :aria-label="`Delete ${task.title}`"
                            @click="deleteTask(task.id)"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>
