import * as yup from 'yup';
import { useI18n } from 'vue-i18n';

export const authLoginSchema = (t: ReturnType<typeof useI18n>['t']) => yup.object().shape({
    email: yup
        .string()
        .required(t('auth.validation.email_required'))
        .email(t('auth.validation.email_invalid')),

    password: yup
        .string()
        .required(t('auth.validation.password_required'))
        .min(8, t('auth.validation.password_min_length')),
});
