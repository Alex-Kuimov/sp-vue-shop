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


export const userCreateSchema = (t: ReturnType<typeof useI18n>['t']) => yup.object().shape({
    name: yup
        .string()
        .required(t('validation.user.name_required'))
        .min(2, t('validation.user.name_min')),

    email: yup
        .string()
        .required(t('validation.user.email_required'))
        .email(t('validation.user.email_invalid')),

    password: yup
        .string()
        .required(t('validation.user.password_required'))
        .min(8, t('validation.user.password_min')), 
        
    password_confirmation: yup
    .string()
    .required(t('validation.user.confirm_password_required'))
    .oneOf([yup.ref('password')], t('validation.user.password_match')),

    role: yup
        .string()
        .required(t('validation.user.role_required')),
});
