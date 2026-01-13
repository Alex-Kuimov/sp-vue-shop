<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { CategoryCreateDTO } from '@/entities/category/model/';
import { ErrorMessage } from "@/shared/ui";
import { postStatusOptions } from '@/shared/consts';

const { t } = useI18n();

defineProps<{
    validationErrors: Record<string, string[]> | null,
    loading?: boolean,
}>();

const emit = defineEmits<{
    (e: 'submit', data: CategoryCreateDTO): void
}>()

const form = ref<CategoryCreateDTO>({
    name: '',
    slug: '',
    description: '',
    seo_title: '',
    seo_description: '',
    seo_keywords: '',
    status: '',
});

const handleSubmit = () => {
    emit('submit', form.value)
}
</script>

<template>
    <n-form class="form" @submit.prevent="handleSubmit">
        <n-form-item :label="t('category.create.form.name')" path="name">
            <n-input v-model:value="form.name" id="name" type="text" :class="{ err: validationErrors?.name }"
                :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.name?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('category.create.form.slug')" path="slug">
            <n-input v-model:value="form.slug" id="slug" type="text" :class="{ err: validationErrors?.slug }"
                :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.slug?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('category.create.form.description')" path="description">
            <n-input v-model:value="form.description" id="description" type="textarea"
                :class="{ err: validationErrors?.description }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.description?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('category.create.form.seo_title')" path="seo_title">
            <n-input v-model:value="form.seo_title" id="seo_title" type="text"
                :class="{ err: validationErrors?.seo_title }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.seo_title?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('category.create.form.seo_description')" path="seo_description">
            <n-input v-model:value="form.seo_description" id="seo_description" type="textarea"
                :class="{ err: validationErrors?.seo_description }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.seo_description?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('category.create.form.seo_keywords')" path="seo_keywords">
            <n-input v-model:value="form.seo_keywords" id="seo_keywords" type="text"
                :class="{ err: validationErrors?.seo_keywords }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.seo_keywords?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('category.create.form.status')" path="role">
            <n-select v-model:value="form.status" :options="postStatusOptions"
                :class="{ err: validationErrors?.status }" :disabled="loading" />
            <ErrorMessage :error="validationErrors?.status?.[0] || null" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :disabled="loading">
            {{ loading ? t('user.create.form.sending') : t('user.create.form.submit') }}
        </n-button>
    </n-form>
</template>

<style scoped></style>