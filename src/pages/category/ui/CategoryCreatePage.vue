<script setup lang="ts">
import { computed } from 'vue';
import { useCategoryStore } from '@/entities/category/model';
import { categoryService } from '@/features/category/model';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { CategoryCreateForm } from '@/features/category';
import { ROUTES } from '@/shared/routes';
import { useYupValidation } from '@/shared/lib/';
import { categoryCreateSchema } from '@/entities/category/model';
import type { CategoryCreateDTO } from '@/entities/category/model';

const { t } = useI18n();
const { clientErrors, validate } = useYupValidation(categoryCreateSchema(t));
const categoryStore = useCategoryStore();
const router = useRouter();

const validationErrors = computed(() => categoryStore.errorMessages ?? clientErrors.value);

const handleCreate = async (formData: CategoryCreateDTO) => {
    categoryStore.errorMessages = null;
    clientErrors.value = null;

    if (!(await validate(formData))) {
        return false
    };

    try {
        await categoryService.createItem(formData);

        categoryStore.currentPage = 1;
        router.push({ name: ROUTES.CATEGORIES.NAME, params: { page: categoryStore.currentPage } });

        await categoryService.getItems(categoryStore.currentPage);
    } catch (e) {
        console.error('Ошибка при создании пользователя', e)
    }
}
</script>

<template>
    <n-h1>{{ t('category.create.page_title') }}</n-h1>
    <CategoryCreateForm :validationErrors="validationErrors" :loading="categoryStore.loading" @submit="handleCreate" />
</template>

<style scoped></style>