<script setup lang="ts">
import { notification } from '@/shared/lib';
import { useI18n } from 'vue-i18n';
import { CategoryCard } from '@/entities/category/ui'
import { categoryService } from '@/features/category/model';
import { useCategoryStore } from '@/entities/category/model';
import type { Category } from '@/entities/category/model'

const { t } = useI18n();

const categoryStore = useCategoryStore();

const { items } = defineProps<{ items: Category[] | null }>();

const deleteCategory = async (id: number) => {
    await categoryService.deleteItem(id);

    categoryStore.currentPage = 1;
    await categoryService.getItems(categoryStore.currentPage);

    notification.success(t('category.delete.success'));
}

</script>
<template>
    <n-table :bordered="false" :single-line="false">
        <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Слаг</th>
                <th>Статус</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <CategoryCard v-for="item in items" v-bind="item" @delete="deleteCategory" />
        </tbody>
    </n-table>
</template>
<style scoped></style>