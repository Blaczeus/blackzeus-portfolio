<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter.vue';
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue';
import { useHeaderScroll } from '@/composables/useHeaderScroll';

const { isScrolled } = useHeaderScroll();

onMounted(() => {
    document.documentElement.classList.add('portfolio-html');
    document.body.classList.add('portfolio-body');
});

onUnmounted(() => {
    document.documentElement.classList.remove('portfolio-html');
    document.body.classList.remove('portfolio-body');
});
</script>

<template>
    <div class="portfolio-site">
        <PortfolioNav :is-scrolled="isScrolled" />
        <slot />
        <PortfolioFooter />
    </div>
</template>
