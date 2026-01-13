import * as yup from 'yup';
import { useI18n } from 'vue-i18n';

export const articleCreateSchema = (t: ReturnType<typeof useI18n>['t']) => yup.object().shape({
    title: yup
        .string()
        .required(t('validation.article.title_required'))
        .min(2, t('validation.article.title_min')),

    slug: yup
        .string()
        .required(t('validation.article.slug_required'))
        .min(2, t('validation.article.slug_min')),

    content: yup
        .string()
        .required(t('validation.article.content_required')),

    excerpt: yup
        .string()
        .required(t('validation.article.excerpt_required')),

    seo_title: yup
        .string()
        .required(t('validation.article.seo_title_required')),

    seo_description: yup
        .string()
        .required(t('validation.article.seo_description_required')),

    seo_keywords: yup
        .string()
        .required(t('validation.article.seo_keywords_required')),

    status: yup
        .string()
        .required(t('validation.article.status_required')),

    user_id: yup
        .number()
        .required(t('validation.article.user_id_required')),

    category_id: yup
        .number()
        .required(t('validation.article.category_id_required')),
});

export const articleUpdateSchema = (t: ReturnType<typeof useI18n>['t']) => yup.object().shape({
    title: yup
        .string()
        .required(t('validation.article.title_required'))
        .min(2, t('validation.article.title_min')),

    slug: yup
        .string()
        .required(t('validation.article.slug_required'))
        .min(2, t('validation.article.slug_min')),

    content: yup
        .string()
        .required(t('validation.article.content_required')),

    excerpt: yup
        .string()
        .required(t('validation.article.excerpt_required')),

    seo_title: yup
        .string()
        .required(t('validation.article.seo_title_required')),

    seo_description: yup
        .string()
        .required(t('validation.article.seo_description_required')),

    seo_keywords: yup
        .string()
        .required(t('validation.article.seo_keywords_required')),

    status: yup
        .string()
        .required(t('validation.article.status_required')),

    user_id: yup
        .number()
        .required(t('validation.article.user_id_required')),

    category_id: yup
        .number()
        .required(t('validation.article.category_id_required')),
});