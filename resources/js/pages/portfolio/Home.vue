<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import SocialLinks from '@/components/portfolio/SocialLinks.vue';
import { useScrollReveal } from '@/composables/useScrollReveal';

useScrollReveal();
</script>

<template>
    <Head title="Anya Chidiebere | Full-Stack Software Developer">
        <meta
            name="description"
            content="Portfolio of Anya Chidiebere, a full-stack software developer building web products with Laravel, PHP, Vue, Inertia, and modern web technologies."
        />
        <meta name="author" content="Anya Chidiebere" />
    </Head>

    <main class="wrapper home-wrapper">
        <section class="home-hero" aria-labelledby="home-title">
            <div class="hero-text">
                <p class="hero-label">Hi, I'm Anya Chidiebere.</p>
                <h1 id="home-title">Full-Stack Software Developer</h1>
                <p class="hero-context">
                    Software Developer at Nervego · Lagos, Nigeria
                </p>
                <p class="hero-welcome">
                    I build full-stack web products with Laravel and Vue, with a
                    strong interest in the systems and decisions that make
                    software actually work well.
                </p>
                <p class="hero-bio">
                    I'm currently building software professionally while
                    studying Software Engineering at MIVA Open University. Most
                    of my work sits around Laravel, PHP, Vue, Inertia and
                    databases, but I'm more interested in building useful things
                    well than forcing every problem into one stack.
                </p>
                <div class="hero-actions">
                    <Link class="hero-button primary-button" href="/#projects">
                        View My Work
                    </Link>
                    <a
                        class="hero-button secondary-button"
                        href="https://github.com/Blaczeus"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
                <div class="hero-socials" aria-label="Social links">
                    <SocialLinks />
                </div>
            </div>

            <div class="hero-image-area">
                <div class="profile-image">
                    <img
                        src="/portfolio/assets/images/anya-profile.png"
                        alt="Portrait of Anya Chidiebere"
                    />
                </div>
            </div>
        </section>

        <section
            id="about"
            class="about-section about-intro home-about"
            aria-labelledby="about-title"
        >
            <p class="section-kicker">ABOUT ME</p>
            <h2 id="about-title">More than just writing code.</h2>
            <div class="about-copy">
                <p>
                    I got into programming around 2022, starting with Python
                    before finding my way into web development and eventually
                    PHP. What really pulled me in was understanding what
                    happened behind the interface — how data moved, how
                    authentication worked, how applications made decisions, and
                    how all those pieces came together to make software actually
                    work.
                </p>
                <p>
                    Today, I build software professionally at Nervego while
                    studying Software Engineering at MIVA Open University. I've
                    grown mostly around full-stack web development, with Laravel
                    and PHP on the backend and Vue on the frontend, but I'm
                    increasingly interested in the deeper engineering behind
                    reliable systems, architecture, and building products that
                    solve real problems.
                </p>
            </div>
        </section>

        <section
            class="about-section home-journey"
            aria-labelledby="journey-title"
        >
            <div class="top-header about-heading">
                <h2 id="journey-title">How I Got Here</h2>
            </div>
            <ol class="timeline">
                <li class="timeline-item">
                    <article class="timeline-card">
                        <p class="timeline-period">2022</p>
                        <h3>Started Programming</h3>
                        <p>
                            Started learning programming with Python before
                            moving into web development and becoming
                            increasingly interested in backend development,
                            databases, and how applications work beyond the
                            interface.
                        </p>
                    </article>
                </li>
                <li class="timeline-item">
                    <article class="timeline-card">
                        <p class="timeline-period">2024</p>
                        <h3>UX Foundations</h3>
                        <p>
                            Completed Google's Foundations of User Experience
                            Design course, adding a stronger understanding of
                            usability and product thinking alongside
                            development.
                        </p>
                    </article>
                </li>
                <li class="timeline-item">
                    <article class="timeline-card">
                        <p class="timeline-period">Professional Development</p>
                        <h3>Software Developer · Nervego</h3>
                        <p>
                            Moved into professional software development,
                            working on real-world web products and internal
                            systems while gaining practical experience across
                            frontend, backend, databases, and application
                            architecture.
                        </p>
                    </article>
                </li>
                <li class="timeline-item">
                    <article class="timeline-card">
                        <p class="timeline-period">2026 – Present</p>
                        <h3>BSc Software Engineering · MIVA Open University</h3>
                        <p>
                            Started formal Software Engineering studies to
                            strengthen the computer science and engineering
                            foundations behind my practical development
                            experience.
                        </p>
                    </article>
                </li>
            </ol>
        </section>
    </main>
</template>
