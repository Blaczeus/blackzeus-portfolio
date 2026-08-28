import { onMounted, onUnmounted, ref } from 'vue';

export function useHeaderScroll(threshold = 50) {
    const isScrolled = ref(false);

    function updateHeaderState() {
        isScrolled.value = window.scrollY > threshold;
    }

    onMounted(() => {
        updateHeaderState();
        window.addEventListener('scroll', updateHeaderState, { passive: true });
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', updateHeaderState);
    });

    return { isScrolled };
}
