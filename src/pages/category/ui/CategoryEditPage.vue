<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { CategoryUpdateForm } from '@/features/category';
import { useCategoryStore } from '@/entities/category/model';
import { categoryService } from '@/features/category/model';
import { notification } from '@/shared/lib';
import { categoryUpdateSchema } from '@/entities/category/model';
import { useYupValidation } from '@/shared/lib/';
import type { CategoryUpdateDTO } from '@/entities/category/model';

const { t } = useI18n();
const { clientErrors, validate } = useYupValidation(categoryUpdateSchema(t));
const route = useRoute();
const categoryStore = useCategoryStore();

const category = ref<CategoryUpdateDTO | null>(null);

const categoryID = computed(() => Number(route.params.id));

const validationErrors = computed(() => categoryStore.errorMessages ?? clientErrors.value);

const handleEdit = async (formData: CategoryUpdateDTO) => {
    categoryStore.errorMessages = null;
    clientErrors.value = null;

    if (!(await validate(formData))) {
        return false
    };

    try {
        await categoryService.updateItem(categoryID.value, formData);
        notification.success(t('user.edit.success'));
    } catch (err) {
        console.error('Ошибка обновления пользователя', err);
        notification.error(t('user.edit.errors.update'));
    }
}

onMounted(async () => {
    try {
        const item = await categoryService.getItem(categoryID.value);
        category.value = { ...item };
    } catch (err) {
        console.error('Ошибка загрузки пользователя', err);
        notification.error(t('user.edit.errors.load'));
    }
});
</script>

<template>
    <n-h1>{{ t('category.edit.page_title') }}</n-h1>
    <CategoryUpdateForm :category="category" :validationErrors="validationErrors" :loading="categoryStore.loading"
        @submit="handleEdit" />
</template>
