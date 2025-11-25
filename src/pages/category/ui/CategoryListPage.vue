<script setup lang="ts">
import { watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useCategoryStore } from '@/entities/category/model';
import { categoryService } from '@/features/category/model';
import { CategoryCreateBtn } from '@/features/category';
import { Pagination, SearchForm } from '@/shared/ui';
import { CategoryListWidget } from '@/widgets/category';
import { ROUTES } from '@/shared/routes';

const { t } = useI18n();
const router = useRouter();
const categoryStore = useCategoryStore();

// Получаем текущую страницу из URL
const { page } = defineProps<{ page: number }>();

categoryStore.currentPage = page;

const handlePageChange = (page: number) => {
    categoryStore.currentPage = page;
};

watch(() => categoryStore.currentPage, (page) => {
    categoryService.getItems(page);
    router.replace({
        name: ROUTES.CATEGORIES.NAME,
        params: { page },
    });
});

const searchHandler = (search: string) => {
    categoryService.getItems(1, search);
};

onMounted(() => {
    categoryService.getItems(categoryStore.currentPage);
});
</script>

<template>
    <n-h1>{{ t('pages.category.list') }}</n-h1>
    <CategoryCreateBtn />
    <SearchForm @search="searchHandler" />
    <CategoryListWidget :items="categoryStore.items" />
    <Pagination v-model:page="categoryStore.currentPage" :total-pages="categoryStore.totalPages"
        @update:page="handlePageChange" />
</template>