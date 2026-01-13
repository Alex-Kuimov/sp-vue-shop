<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { ArticleCreateDTO } from '@/entities/article/model/';
import { ErrorMessage } from "@/shared/ui";
import { postStatusOptions } from '@/shared/consts';

const { t } = useI18n();

defineProps<{
    validationErrors: Record<string, string[]> | null,
    loading?: boolean,
}>();

const emit = defineEmits<{
    (e: 'submit', data: ArticleCreateDTO): void
}>();

const form = ref<ArticleCreateDTO>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    seo_title: '',
    seo_description: '',
    seo_keywords: '',
    status: '',
    user_id: 0,
    category_id: 0,
});

const handleSubmit = () => {
    emit('submit', form.value)
}
</script>

<template>
    <n-form class="form" @submit.prevent="handleSubmit">
        <n-form-item :label="t('article.create.form.title')" path="title">
            <n-input v-model:value="form.title" id="title" type="text" :class="{ err: validationErrors?.title }"
                :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.title?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('article.create.form.slug')" path="slug">
            <n-input v-model:value="form.slug" id="slug" type="text" :class="{ err: validationErrors?.slug }"
                :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.slug?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('article.create.form.content')" path="content">
            <n-input v-model:value="form.content" id="content" type="textarea"
                :class="{ err: validationErrors?.content }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.content?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('article.create.form.excerpt')" path="excerpt">
            <n-input v-model:value="form.excerpt" id="excerpt" type="textarea"
                :class="{ err: validationErrors?.excerpt }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.excerpt?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('article.create.form.seo_title')" path="seo_title">
            <n-input v-model:value="form.seo_title" id="seo_title" type="text"
                :class="{ err: validationErrors?.seo_title }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.seo_title?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('article.create.form.seo_description')" path="seo_description">
            <n-input v-model:value="form.seo_description" id="seo_description" type="textarea"
                :class="{ err: validationErrors?.seo_description }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.seo_description?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('article.create.form.seo_keywords')" path="seo_keywords">
            <n-input v-model:value="form.seo_keywords" id="seo_keywords" type="text"
                :class="{ err: validationErrors?.seo_keywords }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.seo_keywords?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('article.create.form.status')" path="status">
            <n-select v-model:value="form.status" :options="postStatusOptions"
                :class="{ err: validationErrors?.status }" :disabled="loading" />
            <ErrorMessage :error="validationErrors?.status?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('article.create.form.user_id')" path="user_id">
            <n-input-number v-model:value="form.user_id" id="user_id"
                :class="{ err: validationErrors?.user_id }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.user_id?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('article.create.form.category_id')" path="category_id">
            <n-input-number v-model:value="form.category_id" id="category_id"
                :class="{ err: validationErrors?.category_id }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.category_id?.[0] || null" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :disabled="loading">
            {{ loading ? t('article.create.form.sending') : t('article.create.form.submit') }}
        </n-button>
    </n-form>
</template>

<style scoped></style>