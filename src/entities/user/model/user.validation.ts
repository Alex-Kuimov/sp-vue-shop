import * as yup from 'yup';
import { useI18n } from 'vue-i18n';

export const userUpdateSchema = (t: ReturnType<typeof useI18n>['t']) => yup.object().shape({
    name: yup
        .string()
        .required(t('validation.user.name_required'))
        .min(2, t('validation.user.name_min')),

    email: yup
        .string()
        .required(t('validation.user.email_required'))
        .email(t('validation.user.email_invalid')),
});
