<script setup lang="ts">
import { notification } from '@/shared/lib';
import { useI18n } from 'vue-i18n';
import { categoryService } from '@/features/category/model';
import { useCategoryStore } from '@/entities/category/model';

const { t } = useI18n();

const categoryStore = useCategoryStore();

const { id } = defineProps<{ id: number }>();

const onClick = async () => {
    await categoryService.deleteItem(id);

    categoryStore.currentPage = 1;
    await categoryService.getItems(categoryStore.currentPage);

    notification.success(t('category.delete.success'));
}
</script>

<template>
    <n-popconfirm @positive-click="onClick" negative-text="Нет" positive-text="Да, уверен">
        <template #trigger>
            <n-button strong secondary type="error">{{ t('category.delete.button') }}</n-button>
        </template>
        {{ t('category.delete.confirm') }}
    </n-popconfirm>
</template>

<style scoped>
.n-button {
    margin-left: 10px;
}
</style>