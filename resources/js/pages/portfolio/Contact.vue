<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { nextTick, reactive, ref } from 'vue';
import SocialLinks from '@/components/portfolio/SocialLinks.vue';
import { useScrollReveal } from '@/composables/useScrollReveal';

useScrollReveal();

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/Blaczeus',
        icon: 'github' as const,
        external: true,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/anya-chidiebere/',
        icon: 'linkedin' as const,
        external: true,
    },
    {
        label: 'Email',
        href: 'mailto:anyachidiebere.dev@gmail.com',
        icon: 'email' as const,
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/2349129524232?text=Hello%20Chidiebere%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding...',
        icon: 'whatsapp' as const,
        external: true,
    },
];

const form = reactive({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: '',
});

const invalidFields = reactive<Record<string, boolean>>({
    fullName: false,
    emailAddress: false,
    phoneNumber: false,
    subject: false,
    message: false,
});

const formMessage = ref('');
const formMessageType = ref<'error' | 'success' | ''>('');
const nameInput = ref<HTMLInputElement | null>(null);
const emailInput = ref<HTMLInputElement | null>(null);
const phoneInput = ref<HTMLInputElement | null>(null);
const subjectInput = ref<HTMLInputElement | null>(null);
const messageInput = ref<HTMLTextAreaElement | null>(null);

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phoneNumber: string) {
    return /^\+?\d+$/.test(phoneNumber);
}

function clearFieldErrors() {
    Object.keys(invalidFields).forEach((field) => {
        invalidFields[field] = false;
    });
}

function showFormMessage(message: string, type: 'error' | 'success' | '') {
    formMessage.value = message;
    formMessageType.value = type;
}

function validateContactForm() {
    const name = form.fullName.trim();
    const email = form.emailAddress.trim();
    const phone = form.phoneNumber.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    clearFieldErrors();

    if (!name) {
        return {
            isValid: false as const,
            field: 'fullName',
            message: 'Please enter your full name.',
        };
    }

    if (name.length < 3) {
        return {
            isValid: false as const,
            field: 'fullName',
            message: 'Full name must be at least 3 characters.',
        };
    }

    if (!email) {
        return {
            isValid: false as const,
            field: 'emailAddress',
            message: 'Please enter your email address.',
        };
    }

    if (!isValidEmail(email)) {
        return {
            isValid: false as const,
            field: 'emailAddress',
            message: 'Please enter a valid email address.',
        };
    }

    if (!phone) {
        return {
            isValid: false as const,
            field: 'phoneNumber',
            message: 'Please enter your phone number.',
        };
    }

    if (!isValidPhoneNumber(phone)) {
        return {
            isValid: false as const,
            field: 'phoneNumber',
            message:
                'Phone number must contain digits only, with an optional + at the start.',
        };
    }

    if (!subject) {
        return {
            isValid: false as const,
            field: 'subject',
            message: 'Please enter a subject.',
        };
    }

    if (subject.length < 3) {
        return {
            isValid: false as const,
            field: 'subject',
            message: 'Subject must be at least 3 characters.',
        };
    }

    if (!message) {
        return {
            isValid: false as const,
            field: 'message',
            message: 'Please enter your message.',
        };
    }

    if (message.length < 10) {
        return {
            isValid: false as const,
            field: 'message',
            message: 'Message must be at least 10 characters.',
        };
    }

    return { isValid: true as const };
}

function clearCorrectedField(field: string) {
    invalidFields[field] = false;

    if (formMessageType.value === 'success') {
        showFormMessage('', '');
    }
}

function handleSubmit() {
    const result = validateContactForm();

    if (!result.isValid) {
        invalidFields[result.field] = true;
        showFormMessage(result.message, 'error');
        const fields: Record<
            string,
            { value: HTMLInputElement | HTMLTextAreaElement | null }
        > = {
            fullName: nameInput,
            emailAddress: emailInput,
            phoneNumber: phoneInput,
            subject: subjectInput,
            message: messageInput,
        };

        fields[result.field].value?.focus();

        return;
    }

    form.fullName = '';
    form.emailAddress = '';
    form.phoneNumber = '';
    form.subject = '';
    form.message = '';
    clearFieldErrors();
    showFormMessage(
        'Your message has been received. Thank you for getting in touch.',
        'success',
    );
    nextTick(() => nameInput.value?.focus());
}
</script>

<template>
    <Head title="Contact Me | Anya Chidiebere" />

    <main class="wrapper contact-wrapper">
        <section class="contact-intro" aria-labelledby="contact-title">
            <p class="section-kicker">Get in Touch</p>
            <h1 id="contact-title">Let&apos;s Build Something Great</h1>
            <p>
                Have a project in mind, an interesting opportunity, or just want
                to connect? I&apos;d be happy to hear from you. Fill out the
                form below or reach out through any of my professional channels.
            </p>
        </section>

        <section
            class="contact-layout"
            aria-label="Contact details and message form"
        >
            <div class="contact-details">
                <h2>Let&apos;s Connect</h2>
                <dl class="contact-info-list">
                    <div class="contact-info-item">
                        <dt>Email</dt>
                        <dd>
                            <a href="mailto:anyachidiebere.dev@gmail.com">
                                anyachidiebere.dev@gmail.com
                            </a>
                        </dd>
                    </div>
                    <div class="contact-info-item">
                        <dt>Location</dt>
                        <dd>
                            Lagos, Nigeria<br />Available for remote and hybrid
                            opportunities.
                        </dd>
                    </div>
                    <div class="contact-info-item">
                        <dt>Availability</dt>
                        <dd>
                            Open to part-time roles, contract work, freelance
                            projects, and technical collaborations.
                        </dd>
                    </div>
                    <div class="contact-info-item">
                        <dt>Response Time</dt>
                        <dd>Usually within 1–2 days.</dd>
                    </div>
                </dl>

                <div class="contact-status-card">
                    <h3>Current Status</h3>
                    <p>
                        <span class="status-dot" aria-hidden="true"></span>Open
                        to new opportunities
                    </p>
                </div>

                <div class="contact-interest">
                    <h3>Currently Interested In</h3>
                    <ul>
                        <li>Laravel &amp; Vue Projects</li>
                        <li>Backend/API Development</li>
                        <li>Full-Stack Web Applications</li>
                        <li>Technical Collaboration</li>
                        <li>Open Source Contributions</li>
                    </ul>
                </div>
            </div>

            <form
                id="contact-form"
                class="contact-form"
                novalidate
                @submit.prevent="handleSubmit"
            >
                <div class="contact-field">
                    <label for="contact-name">Full Name</label>
                    <input
                        id="contact-name"
                        ref="nameInput"
                        v-model="form.fullName"
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        :aria-invalid="invalidFields.fullName"
                        @input="clearCorrectedField('fullName')"
                    />
                </div>
                <div class="contact-field">
                    <label for="contact-email">Email Address</label>
                    <input
                        id="contact-email"
                        ref="emailInput"
                        v-model="form.emailAddress"
                        type="email"
                        name="emailAddress"
                        placeholder="Enter your email address"
                        :aria-invalid="invalidFields.emailAddress"
                        @input="clearCorrectedField('emailAddress')"
                    />
                </div>
                <div class="contact-field">
                    <label for="contact-phone">Phone Number</label>
                    <input
                        id="contact-phone"
                        ref="phoneInput"
                        v-model="form.phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        :aria-invalid="invalidFields.phoneNumber"
                        @input="clearCorrectedField('phoneNumber')"
                    />
                </div>
                <div class="contact-field">
                    <label for="contact-subject">Subject</label>
                    <input
                        id="contact-subject"
                        ref="subjectInput"
                        v-model="form.subject"
                        type="text"
                        name="subject"
                        placeholder="Briefly describe your project or enquiry"
                        :aria-invalid="invalidFields.subject"
                        @input="clearCorrectedField('subject')"
                    />
                </div>
                <div class="contact-field">
                    <label for="contact-message">Message</label>
                    <textarea
                        id="contact-message"
                        ref="messageInput"
                        v-model="form.message"
                        name="message"
                        placeholder="Tell me about your project, opportunity, or how I can help..."
                        :aria-invalid="invalidFields.message"
                        @input="clearCorrectedField('message')"
                    ></textarea>
                </div>
                <p
                    id="contact-form-message"
                    class="contact-form-message"
                    :class="{
                        'is-error': formMessageType === 'error',
                        'is-success': formMessageType === 'success',
                    }"
                    aria-live="polite"
                >
                    {{ formMessage }}
                </p>
                <button class="contact-submit" type="submit">
                    Send Message
                </button>
            </form>

            <div class="contact-options">
                <h2>Find Me Online</h2>
                <p>
                    Explore my work, connect professionally, or reach out
                    directly.
                </p>
                <div class="contact-option-links" aria-label="Contact options">
                    <SocialLinks :links="socialLinks" />
                </div>
            </div>
        </section>
    </main>
</template>
