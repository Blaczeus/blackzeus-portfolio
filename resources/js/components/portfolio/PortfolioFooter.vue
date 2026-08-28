<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { portfolioNavItems } from '@/lib/portfolioNavigation';

const navItems = portfolioNavItems;
</script>

<template>
    <footer class="site-footer">
        <div class="top-footer">
            <Link class="footer-logo" href="/" aria-label="Anya home">
                <span class="nav-brand-line">
                    <span class="nav-name">Anya</span>
                    <span class="nav-dot" aria-hidden="true">.</span>
                </span>
                <span class="nav-tagline">Building software that matters.</span>
            </Link>
        </div>
        <nav class="middle-footer" aria-label="Footer navigation">
            <ul class="footer-menu">
                <li
                    v-for="item in navItems"
                    :key="item.href"
                    class="footer_menu_list"
                >
                    <Link :href="item.href">{{ item.label }}</Link>
                </li>
            </ul>
        </nav>
        <div class="bottom-footer">
            <p>&copy; 2026 Anya Chidiebere. All rights reserved.</p>
        </div>
    </footer>
</template>
