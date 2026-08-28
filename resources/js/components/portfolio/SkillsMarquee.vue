<script setup lang="ts">
type Skill = {
    name: string;
    icon: string;
    alt: string;
};

const skills: Skill[] = [
    {
        name: 'HTML',
        icon: '/portfolio/assets/skills/html5.svg',
        alt: 'HTML logo',
    },
    { name: 'CSS', icon: '/portfolio/assets/skills/css.svg', alt: 'CSS logo' },
    {
        name: 'JavaScript',
        icon: '/portfolio/assets/skills/javascript.svg',
        alt: 'JavaScript logo',
    },
    {
        name: 'PHP',
        icon: '/portfolio/assets/skills/Php_dark.svg',
        alt: 'PHP logo',
    },
    {
        name: 'Laravel',
        icon: '/portfolio/assets/skills/laravel.svg',
        alt: 'Laravel logo',
    },
    {
        name: 'Vue.js',
        icon: '/portfolio/assets/skills/vue.svg',
        alt: 'Vue.js logo',
    },
    {
        name: 'Inertia.js',
        icon: '/portfolio/assets/skills/inertia.svg',
        alt: 'Inertia.js logo',
    },
    {
        name: 'Tailwind CSS',
        icon: '/portfolio/assets/skills/tailwindcss.svg',
        alt: 'Tailwind CSS logo',
    },
    {
        name: 'MySQL',
        icon: '/portfolio/assets/skills/MySQL_wordmark_dark.svg',
        alt: 'MySQL logo',
    },
    { name: 'Git', icon: '/portfolio/assets/skills/git.svg', alt: 'Git logo' },
    {
        name: 'GitHub',
        icon: '/portfolio/assets/skills/GitHub_dark.svg',
        alt: 'GitHub logo',
    },
];
</script>

<template>
    <div class="skills-marquee" aria-label="Technical skills list">
        <div class="skills-track">
            <ul class="skills-group">
                <li
                    v-for="skill in skills"
                    :key="skill.name"
                    class="skill-item"
                    tabindex="0"
                >
                    <img :src="skill.icon" :alt="skill.alt" />
                    <span>{{ skill.name }}</span>
                </li>
            </ul>
            <ul class="skills-group" aria-hidden="true">
                <li
                    v-for="skill in skills"
                    :key="`duplicate-${skill.name}`"
                    class="skill-item duplicate-skill"
                    tabindex="-1"
                >
                    <img :src="skill.icon" alt="" />
                    <span>{{ skill.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
