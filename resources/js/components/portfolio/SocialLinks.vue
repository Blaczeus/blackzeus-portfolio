<script setup lang="ts">
type SocialLink = {
    label: string;
    href: string;
    icon: 'github' | 'linkedin' | 'email' | 'whatsapp';
    external?: boolean;
};

withDefaults(
    defineProps<{
        links?: SocialLink[];
    }>(),
    {
        links: () => [
            {
                label: 'GitHub',
                href: 'https://github.com/Blaczeus',
                icon: 'github',
                external: true,
            },
            {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/anya-chidiebere/',
                icon: 'linkedin',
                external: true,
            },
            {
                label: 'Email',
                href: 'mailto:anyachidiebere.dev@gmail.com',
                icon: 'email',
            },
        ],
    },
);
</script>

<template>
    <a
        v-for="link in links"
        :key="link.label"
        class="hero-social-link"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined"
    >
        <span
            class="social-icon"
            :class="`${link.icon}-icon`"
            aria-hidden="true"
        ></span>
        <span>{{ link.label }}</span>
    </a>
</template>
