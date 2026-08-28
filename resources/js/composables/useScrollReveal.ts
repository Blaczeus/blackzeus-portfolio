import { onMounted, onUnmounted } from 'vue';

type RevealDirection = 'top' | 'left' | 'right' | 'bottom';

type RevealGroup = {
    selector: string;
    direction: RevealDirection;
};

const revealGroups: RevealGroup[] = [
    {
        selector:
            '.about-intro, .projects-intro, .planner-intro, .contact-intro',
        direction: 'top',
    },
    { selector: '.timeline, .contact-details', direction: 'left' },
    {
        selector:
            '.table-wrap, .skills-marquee, .hobbies-list, .task-section, .contact-options, .portfolio-walkthrough, .site-footer',
        direction: 'bottom',
    },
    {
        selector:
            '.project-showcase .project-row:nth-child(odd), .planner-panel',
        direction: 'left',
    },
    {
        selector:
            '.project-showcase .project-row:nth-child(even), .contact-form',
        direction: 'right',
    },
];

export function useScrollReveal() {
    let observer: IntersectionObserver | null = null;
    const revealItems: HTMLElement[] = [];

    onMounted(() => {
        const reducedMotionQuery = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        );

        if (reducedMotionQuery.matches || !('IntersectionObserver' in window)) {
            return;
        }

        revealGroups.forEach((group) => {
            document
                .querySelectorAll<HTMLElement>(group.selector)
                .forEach((item) => {
                    item.classList.add(
                        'reveal-item',
                        `reveal-from-${group.direction}`,
                    );
                    revealItems.push(item);
                });
        });

        if (!revealItems.length) {
            return;
        }

        observer = new IntersectionObserver(
            (entries, activeObserver) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const target = entry.target as HTMLElement;
                    target.classList.add('is-visible');
                    target.style.transitionDelay = '';
                    activeObserver.unobserve(target);
                });
            },
            {
                threshold: 0.22,
                rootMargin: '0px 0px -4% 0px',
            },
        );

        revealItems.forEach((item, index) => {
            item.style.transitionDelay = `${Math.min((index % 4) * 130, 390)}ms`;
            observer?.observe(item);
        });
    });

    onUnmounted(() => {
        observer?.disconnect();
        revealItems.forEach((item) => {
            item.classList.remove(
                'reveal-item',
                'reveal-from-top',
                'reveal-from-left',
                'reveal-from-right',
                'reveal-from-bottom',
                'is-visible',
            );
            item.style.transitionDelay = '';
        });
    });
}
