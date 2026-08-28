<script setup lang="ts">
type ProjectStatus = 'completed' | 'development' | 'offline';

type ProjectTech = {
    label: string;
    icon?: string;
};

type ProjectImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
    featured?: boolean;
};

type ProjectLink = {
    label: string;
    href?: string;
    primary?: boolean;
    unavailable?: boolean;
    privateRepository?: boolean;
    ariaLabel?: string;
};

const props = defineProps<{
    title: string;
    category: string;
    description: string;
    status: string;
    statusType: ProjectStatus;
    ownership: string;
    tech: ProjectTech[];
    links: ProjectLink[];
    images: ProjectImage[];
    reverse?: boolean;
    featured?: boolean;
    mediaType?: 'web' | 'mobile';
}>();

const statusClass = {
    completed: 'status-completed',
    development: 'status-development',
    offline: 'status-offline',
}[props.statusType];
</script>

<template>
    <article
        class="project-row"
        :class="{
            'project-row-reverse': reverse,
            'project-featured': featured,
        }"
    >
        <div
            class="project-media"
            :class="{ 'mobile-media': mediaType === 'mobile' }"
        >
            <div
                v-if="mediaType === 'mobile'"
                class="mobile-preview-gallery"
                :aria-label="`${title} mobile application screenshots`"
            >
                <img
                    v-for="image in images"
                    :key="image.src"
                    class="mobile-preview-image"
                    :class="{ 'featured-preview': image.featured }"
                    :src="image.src"
                    :alt="image.alt"
                    :width="image.width"
                    :height="image.height"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <img
                v-else
                class="project-image web-project-image"
                :src="images[0].src"
                :alt="images[0].alt"
                :width="images[0].width"
                :height="images[0].height"
                :loading="featured ? undefined : 'lazy'"
                decoding="async"
            />
        </div>
        <div class="project-info">
            <div class="project-meta">
                <p>{{ category }}</p>
            </div>
            <h2>{{ title }}</h2>
            <span class="project-status" :class="statusClass">{{
                status
            }}</span>
            <p>{{ description }}</p>
            <ul
                class="project-tech-list"
                :aria-label="`Technologies used for ${title}`"
            >
                <li v-for="item in tech" :key="item.label">
                    <img
                        v-if="item.icon"
                        :src="item.icon"
                        alt=""
                        aria-hidden="true"
                    />
                    <span>{{ item.label }}</span>
                </li>
            </ul>
            <span class="ownership-badge">{{ ownership }}</span>
            <div class="project-links">
                <template v-for="link in links" :key="link.label">
                    <span
                        v-if="link.unavailable"
                        class="project-link unavailable private-repository-label"
                        :aria-label="link.ariaLabel"
                    >
                        <span
                            v-if="link.privateRepository"
                            class="project-lock-icon"
                            aria-hidden="true"
                        ></span>
                        <span>{{ link.label }}</span>
                    </span>
                    <span v-else-if="!link.href" class="project-note-badge">
                        {{ link.label }}
                    </span>
                    <a
                        v-else
                        class="project-link"
                        :class="{ 'primary-project-link': link.primary }"
                        :href="link.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="link.ariaLabel"
                    >
                        {{ link.label }}
                    </a>
                </template>
            </div>
        </div>
    </article>
</template>
