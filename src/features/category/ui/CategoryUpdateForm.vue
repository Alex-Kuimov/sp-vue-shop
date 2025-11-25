<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { ErrorMessage } from "@/shared/ui";
import type { CategoryUpdateDTO } from '@/entities/category/model';
import { postStatusOptions } from '@/shared/consts';

const { t } = useI18n();

const { category, validationErrors, loading } = defineProps<{
    category: Partial<CategoryUpdateDTO> | null,
    validationErrors: Record<string, string[]> | null,
    loading?: boolean,
}>();

const emit = defineEmits<{
    (e: 'submit', data: CategoryUpdateDTO): void
}>();

const form = ref<CategoryUpdateDTO>({
    name: '',
    slug: '',
    description: '',
    seo_title: '',
    seo_description: '',
    seo_keywords: '',
    status: '',
});

const sendData = ref<boolean>(false);

watch(() => category, (data) => {
    if (data) {
        form.value.name = data.name ?? '';
        form.value.slug = data.slug ?? '';
        form.value.description = data.description ?? '';
        form.value.seo_title = data.seo_title ?? '';
        form.value.seo_description = data.seo_description ?? '';
        form.value.seo_keywords = data.seo_keywords ?? '';
        form.value.status = data.status ?? '';
    }
}, { immediate: true });


watch(() => loading, (newValue) => {
    if (!newValue) sendData.value = false;
});

const handleSubmit = async () => {
    if (loading) {
        return
    };

    emit('submit', form.value);
    sendData.value = true;
}
</script>

<template>
    <NForm class="form" @submit.prevent="handleSubmit">
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
            <n-input v-model:value="form.description" id="description" type="text"
                :class="{ err: validationErrors?.description }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.description?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('category.create.form.seo_title')" path="seo_title">
            <n-input v-model:value="form.seo_title" id="seo_title" type="text"
                :class="{ err: validationErrors?.seo_title }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.seo_title?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('category.create.form.seo_description')" path="seo_description">
            <n-input v-model:value="form.seo_description" id="seo_description" type="text"
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

        <NButton attr-type="submit" type="primary" :disabled="loading">
            {{ sendData ? t('user.update.form.sending') : t('buttons.save') }}
        </NButton>
    </NForm>
</template>

<style scoped>
.err {
    border: 1px solid red;
}
</style>
