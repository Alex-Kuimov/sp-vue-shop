<script setup lang="ts">
import { watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useArticleStore } from '@/entities/article/model';
import { articleService } from '@/features/article/model';
import { Pagination, SearchForm, CreateBtn } from '@/shared/ui';
import { ArticleListWidget } from '@/widgets/article';
import { ROUTES } from '@/shared/routes';

const { t } = useI18n();
const router = useRouter();
const articleStore = useArticleStore();

// Получаем текущую страницу из URL
const { page } = defineProps<{ page: number }>();

articleStore.currentPage = page;

const handlePageChange = (page: number) => {
    articleStore.currentPage = page;
};

watch(() => articleStore.currentPage, (page) => {
    articleService.getItems(page);
    router.replace({
        name: ROUTES.ARTICLES.NAME,
        params: { page },
    });
});

const searchHandler = (search: string) => {
    articleService.getItems(1, search);
};

onMounted(() => {
    articleService.getItems(articleStore.currentPage);
});
</script>

<template>
    <n-h1>{{ t('pages.article.list') }}</n-h1>
    <CreateBtn :route-name="ROUTES.ARTICLE_CREATE.NAME" :title-key="'article.create.title'" />
    <SearchForm @search="searchHandler" />
    <ArticleListWidget :items="articleStore.items" />
    <Pagination v-model:page="articleStore.currentPage" :total-pages="articleStore.totalPages"
        @update:page="handlePageChange" />
</template>