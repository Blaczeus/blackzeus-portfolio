<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { portfolioNavItems } from '@/lib/portfolioNavigation';

defineProps<{
    isScrolled: boolean;
}>();

const page = usePage();
const isOpen = ref(false);

const navItems = portfolioNavItems;

const currentPath = computed(() => page.url.split('?')[0] || '/');

function isActive(href: string) {
    return currentPath.value === href;
}

function closeMobileMenu() {
    isOpen.value = false;
}

function toggleMobileMenu() {
    isOpen.value = !isOpen.value;
}

function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
    <header
        id="header"
        class="site-header"
        :class="{ 'header-scrolled': isScrolled }"
    >
        <nav class="site-nav" aria-label="Main navigation">
            <Link class="nav-logo" href="/" aria-label="Anya home">
                <span class="nav-brand-line">
                    <span class="nav-name">Anya</span>
                    <span class="nav-dot" aria-hidden="true">.</span>
                </span>
                <span class="nav-tagline">Building software that matters.</span>
            </Link>

            <div
                id="site-navigation"
                class="nav-menu"
                :class="{ responsive: isOpen }"
            >
                <ul class="nav_menu_list">
                    <li
                        v-for="item in navItems"
                        :key="item.href"
                        class="nav_list"
                    >
                        <Link
                            class="nav-link"
                            :class="{ 'active-link': isActive(item.href) }"
                            :href="item.href"
                            :aria-current="
                                isActive(item.href) ? 'page' : undefined
                            "
                            @click="closeMobileMenu"
                        >
                            {{ item.label }}
                        </Link>
                    </li>
                </ul>
            </div>

            <button
                class="nav-menu-btn"
                type="button"
                :aria-label="
                    isOpen ? 'Close navigation menu' : 'Open navigation menu'
                "
                aria-controls="site-navigation"
                :aria-expanded="isOpen"
                @click="toggleMobileMenu"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </nav>
    </header>
</template>
