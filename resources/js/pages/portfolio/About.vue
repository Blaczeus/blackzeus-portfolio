<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import SkillsMarquee from '@/components/portfolio/SkillsMarquee.vue';
import { useScrollReveal } from '@/composables/useScrollReveal';

useScrollReveal();
</script>

<template>
    <Head title="About Me | Anya Chidiebere" />

    <main class="wrapper about-wrapper">
        <section
            class="about-section about-intro"
            aria-labelledby="about-title"
        >
            <p class="section-kicker">About Me</p>
            <h1 id="about-title">About Me</h1>
            <p>
                I'm a Software Engineering student at MIVA Open University and a
                full-stack developer who enjoys turning ideas into practical
                software. Alongside my studies, I build real-world web
                applications that strengthen my technical skills while solving
                meaningful problems.
            </p>
        </section>

        <section
            class="about-section"
            aria-labelledby="education-journey-title"
        >
            <div class="top-header about-heading">
                <h2 id="education-journey-title">My Education Journey</h2>
            </div>
            <ol class="timeline">
                <li class="timeline-item">
                    <article class="timeline-card">
                        <p class="timeline-period">2015 – 2021</p>
                        <h3>Secondary Education</h3>
                        <p class="timeline-institution">
                            Royal Kriston College
                        </p>
                        <p>
                            I completed my secondary education at Royal Kriston
                            College, where I also served as Senior Prefect.
                        </p>
                    </article>
                </li>
                <li class="timeline-item">
                    <article class="timeline-card">
                        <p class="timeline-period">July 2024</p>
                        <h3>Foundations of User Experience (UX) Design</h3>
                        <p class="timeline-institution">
                            Google through Coursera
                        </p>
                        <p>
                            I completed a professional course covering the
                            foundations of user experience design.
                        </p>
                    </article>
                </li>
                <li class="timeline-item">
                    <article class="timeline-card">
                        <p class="timeline-period">2026 – Present</p>
                        <h3>Bachelor of Science in Software Engineering</h3>
                        <p class="timeline-institution">MIVA Open University</p>
                        <p>
                            I am currently studying Software Engineering and
                            developing a stronger foundation in programming, web
                            technologies, problem-solving and software
                            engineering principles.
                        </p>
                    </article>
                </li>
            </ol>
        </section>

        <section class="about-section" aria-labelledby="education-table-title">
            <div class="top-header about-heading">
                <h2 id="education-table-title">Academic Summary</h2>
            </div>
            <div class="table-wrap">
                <table class="education-table">
                    <caption>
                        Summary of my education and professional certification
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">Qualification</th>
                            <th scope="col">Institution or Provider</th>
                            <th scope="col">Period</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Secondary Education</td>
                            <td>Royal Kriston College</td>
                            <td>2015 – 2021</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Foundations of User Experience (UX) Design</td>
                            <td>Google through Coursera</td>
                            <td>July 2024</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>BSc Software Engineering</td>
                            <td>MIVA Open University</td>
                            <td>2026 – Present</td>
                            <td>In Progress</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section
            class="about-section career-layout"
            aria-labelledby="career-title"
        >
            <h2 id="career-title">Career Aspirations</h2>
            <p>
                My long-term goal is to become a software engineer who builds
                reliable and scalable digital products. I am particularly
                interested in backend engineering, full-stack web development,
                system architecture, and creating software that solves practical
                problems. I enjoy continuously learning new technologies and
                improving my engineering skills through real-world projects.
            </p>
        </section>

        <section class="about-section" aria-labelledby="skills-title">
            <div class="top-header about-heading">
                <h2 id="skills-title">Technical Skills</h2>
                <p>
                    These are the main tools and technologies I use across my
                    academic, personal and professional projects.
                </p>
            </div>
            <SkillsMarquee />
        </section>

        <section class="about-section" aria-labelledby="hobbies-title">
            <div class="top-header about-heading">
                <h2 id="hobbies-title">Hobbies and Interests</h2>
            </div>
            <ul class="hobbies-list">
                <li>🎮 Playing Video Games</li>
                <li>⚽ Football</li>
                <li>🎬 Watching Movies</li>
                <li>📚 Reading</li>
                <li>📷 Photography</li>
                <li>🧠 Learning New Technologies</li>
            </ul>
        </section>
    </main>
</template>
