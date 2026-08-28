<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import ProjectRow from '@/components/portfolio/ProjectRow.vue';
import { useScrollReveal } from '@/composables/useScrollReveal';

useScrollReveal();

const skillPath = '/portfolio/assets/skills';
const projectPath = '/portfolio/assets/images/projects';

const projects = [
    {
        title: 'Nerv Ballot',
        category: 'Full-Stack Web Application',
        status: 'In Development',
        statusType: 'development' as const,
        ownership: 'Lead Developer',
        featured: true,
        description:
            'A voting platform for running online contests and elections. It supports contestant registration, public voting, administrative workflows, and structured election management through a Laravel and Vue-based system.',
        images: [
            {
                src: `${projectPath}/nerv-ballot-home.png`,
                alt: 'Nerv Ballot voting platform homepage',
                width: 1917,
                height: 1078,
            },
        ],
        tech: [
            { label: 'Laravel', icon: `${skillPath}/laravel.svg` },
            { label: 'Vue', icon: `${skillPath}/vue.svg` },
            { label: 'Inertia', icon: `${skillPath}/inertia.svg` },
            { label: 'MySQL', icon: `${skillPath}/MySQL_wordmark_dark.svg` },
            { label: 'Tailwind CSS', icon: `${skillPath}/tailwindcss.svg` },
        ],
        links: [
            {
                label: 'Private Company Repository',
                unavailable: true,
                privateRepository: true,
                ariaLabel: 'Private Company Repository',
            },
        ],
    },
    {
        title: 'Student Portfolio',
        category: 'Responsive Web Application',
        status: 'Completed',
        statusType: 'completed' as const,
        ownership: 'Solo Project',
        reverse: true,
        description:
            'A responsive student portfolio and academic management website created for my university coursework. It presents my profile, skills, academic work, projects, and includes an interactive academic planner.',
        images: [
            {
                src: `${projectPath}/student-portfolio-home.png`,
                alt: 'Student portfolio homepage',
                width: 1917,
                height: 1018,
            },
        ],
        tech: [
            { label: 'HTML5', icon: `${skillPath}/html5.svg` },
            { label: 'CSS3', icon: `${skillPath}/css.svg` },
            { label: 'JavaScript', icon: `${skillPath}/javascript.svg` },
            { label: 'Local Storage' },
            { label: 'Responsive Design' },
        ],
        links: [
            {
                label: 'View Code',
                href: 'https://github.com/Blaczeus/cos106-student-portfolio',
                primary: true,
                ariaLabel: 'View code for Student Portfolio on GitHub',
            },
            {
                label: 'Live Demo',
                href: 'https://blaczeus.github.io/cos106-student-portfolio/',
                ariaLabel: 'View live demo for Student Portfolio',
            },
        ],
    },
    {
        title: 'HomeHub',
        category: 'Mobile Application',
        status: 'Completed — Demo Offline',
        statusType: 'offline' as const,
        ownership: 'Solo Project',
        mediaType: 'mobile' as const,
        description:
            'A mobile property marketplace concept designed to help users discover homes, rentals, and accommodation opportunities through a clean and structured mobile experience.',
        images: [
            {
                src: `${projectPath}/homehub-splash.jpg`,
                alt: 'HomeHub splash screen',
                width: 720,
                height: 1546,
            },
            {
                src: `${projectPath}/homehub-browse-properties.jpg`,
                alt: 'HomeHub property browsing screen',
                width: 720,
                height: 1541,
                featured: true,
            },
            {
                src: `${projectPath}/homehub-property-details.jpg`,
                alt: 'HomeHub property details screen',
                width: 720,
                height: 1540,
            },
        ],
        tech: [
            {
                label: 'React Native',
                icon: `${skillPath}/reactnative-wordmark.svg`,
            },
            { label: 'Expo', icon: `${skillPath}/expo.svg` },
            { label: 'JavaScript', icon: `${skillPath}/javascript.svg` },
            { label: 'Mobile UI Development' },
        ],
        links: [
            {
                label: 'View Code',
                href: 'https://github.com/Blaczeus/HomeHub',
                primary: true,
                ariaLabel: 'View code for HomeHub on GitHub',
            },
            { label: 'Demo Offline' },
        ],
    },
    {
        title: 'Corexpert',
        category: 'Finance Mobile Application',
        status: 'Completed — Demo Offline',
        statusType: 'offline' as const,
        ownership: 'Solo Project',
        reverse: true,
        mediaType: 'mobile' as const,
        description:
            'A finance-focused mobile application interface built with Expo and React Native. It explores structured financial service flows, responsive mobile screens, and user-friendly navigation.',
        images: [
            {
                src: `${projectPath}/corexpert-splash.jpg`,
                alt: 'Corexpert splash screen',
                width: 720,
                height: 1527,
            },
            {
                src: `${projectPath}/corexpert-home.jpg`,
                alt: 'Corexpert home screen',
                width: 720,
                height: 1590,
                featured: true,
            },
            {
                src: `${projectPath}/corexpert-action.jpg`,
                alt: 'Corexpert action screen',
                width: 720,
                height: 1584,
            },
        ],
        tech: [
            {
                label: 'React Native',
                icon: `${skillPath}/reactnative-wordmark.svg`,
            },
            { label: 'Expo', icon: `${skillPath}/expo.svg` },
            { label: 'JavaScript', icon: `${skillPath}/javascript.svg` },
            { label: 'Mobile UI Development' },
        ],
        links: [
            {
                label: 'View Code',
                href: 'https://github.com/Blaczeus/corexpert',
                primary: true,
                ariaLabel: 'View code for Corexpert on GitHub',
            },
            { label: 'Demo Offline' },
        ],
    },
    {
        title: 'PixVault',
        category: 'Mobile Image Application',
        status: 'Completed',
        statusType: 'completed' as const,
        ownership: 'Solo Project',
        mediaType: 'mobile' as const,
        description:
            'A mobile wallpaper application that uses the Pixabay API to help users browse, download, and share high-quality backgrounds through a simple and responsive interface.',
        images: [
            {
                src: `${projectPath}/pixvault-splash.jpg`,
                alt: 'PixVault splash screen',
                width: 720,
                height: 1583,
            },
            {
                src: `${projectPath}/pixvault-home.jpg`,
                alt: 'PixVault image browsing screen',
                width: 720,
                height: 1585,
                featured: true,
            },
            {
                src: `${projectPath}/pixvault-view.jpg`,
                alt: 'PixVault image preview screen',
                width: 720,
                height: 1586,
            },
        ],
        tech: [
            {
                label: 'React Native',
                icon: `${skillPath}/reactnative-wordmark.svg`,
            },
            { label: 'Expo', icon: `${skillPath}/expo.svg` },
            { label: 'JavaScript', icon: `${skillPath}/javascript.svg` },
            { label: 'Pixabay API' },
            { label: 'Tailwind CSS', icon: `${skillPath}/tailwindcss.svg` },
        ],
        links: [
            {
                label: 'View Code',
                href: 'https://github.com/Blaczeus/PixVault',
                primary: true,
                ariaLabel: 'View code for PixVault on GitHub',
            },
        ],
    },
];
</script>

<template>
    <Head title="Projects | Anya Chidiebere" />

    <main class="wrapper projects-wrapper">
        <section class="projects-intro" aria-labelledby="projects-title">
            <p class="section-kicker">Selected Work</p>
            <h1 id="projects-title">Projects</h1>
            <p>
                A selection of web and mobile applications I have designed and
                developed, showing my work across full-stack development,
                responsive interfaces, product thinking, and practical
                problem-solving.
            </p>
        </section>

        <section class="project-showcase" aria-label="Project showcase">
            <ProjectRow
                v-for="project in projects"
                :key="project.title"
                v-bind="project"
            />
        </section>

        <section
            class="portfolio-walkthrough"
            aria-labelledby="walkthrough-title"
        >
            <div class="walkthrough-content">
                <p class="section-kicker">Portfolio Demo</p>
                <h2 id="walkthrough-title">Portfolio Walkthrough</h2>
                <p>
                    A short walkthrough of the portfolio, including the project
                    pages, academic planner, and contact form interactions.
                </p>
            </div>

            <div class="walkthrough-video-frame">
                <video
                    class="walkthrough-video"
                    controls
                    preload="metadata"
                    playsinline
                >
                    <source
                        src="/portfolio/assets/media/portfolio-walkthrough.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </section>
    </main>
</template>
