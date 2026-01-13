import * as yup from 'yup';
import { useI18n } from 'vue-i18n';

export const categoryCreateSchema = (t: ReturnType<typeof useI18n>['t']) => yup.object().shape({
    name: yup
        .string()
        .required(t('validation.category.name_required'))
        .min(2, t('validation.category.name_min')),

    slug: yup
        .string()
        .required(t('validation.category.slug_required'))
        .min(2, t('validation.category.slug_min')),

    description: yup
        .string()
        .required(t('validation.category.description_required')),

    seo_title: yup
        .string()
        .required(t('validation.category.seo_title_required')),

    seo_description: yup
        .string()
        .required(t('validation.category.seo_description_required')),

    seo_keywords: yup
        .string()
        .required(t('validation.category.seo_keywords_required')),

    status: yup
        .string()
        .required(t('validation.category.status_required')),
});

export const categoryUpdateSchema = (t: ReturnType<typeof useI18n>['t']) => yup.object().shape({
    name: yup
        .string()
        .required(t('validation.category.name_required'))
        .min(2, t('validation.category.name_min')),

    slug: yup
        .string()
        .required(t('validation.category.slug_required'))
        .min(2, t('validation.category.slug_min')),

    description: yup
        .string()
        .required(t('validation.category.description_required')),

    seo_title: yup
        .string()
        .required(t('validation.category.seo_title_required')),

    seo_description: yup
        .string()
        .required(t('validation.category.seo_description_required')),

    seo_keywords: yup
        .string()
        .required(t('validation.category.seo_keywords_required')),

    status: yup
        .string()
        .required(t('validation.category.status_required')),
});