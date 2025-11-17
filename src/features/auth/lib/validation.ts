import type { FormItemRule } from 'naive-ui';
import type { ComposerTranslation } from 'vue-i18n';

export const getEmailRule = (t: ComposerTranslation): FormItemRule => ({
    required: true,
    trigger: ['blur'],
    validator: (_, value: string) => {
        const v = (value ?? '').trim();

        if (!v) {
            return Promise.reject(t('auth.validation.email_required'));
        }

        const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

        if (!re.test(v)) {
            return Promise.reject(t('auth.validation.email_invalid'));
        }

        return Promise.resolve();
    },
});

export const getPasswordRule = (t: ComposerTranslation): FormItemRule => ({
    required: true,
    trigger: ['blur'],
    validator: (_, value: string) => {
        const v = (value ?? '').trim();

        if (!v) {
            return Promise.reject(t('auth.validation.password_required'));
        }
        if (v.length < 8) {
            return Promise.reject(t('auth.validation.password_min_length'));
        }

        return Promise.resolve();
    },
});