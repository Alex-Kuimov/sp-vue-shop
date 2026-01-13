<script setup lang="ts">
import { notification } from '@/shared/lib';
import { useI18n } from 'vue-i18n';
import { articleService } from '@/features/article/model';
import { useArticleStore } from '@/entities/article/model';
import { ArticleCard } from '@/entities/article/ui'
import type { Article } from '@/entities/article/model'

const { t } = useI18n();

const articleStore = useArticleStore();

const { items } = defineProps<{ items: Article[] | null }>();

const deleteArticle = async (id: number) => {
    await articleService.deleteItem(id);

    articleStore.currentPage = 1;
    await articleService.getItems(articleStore.currentPage);

    notification.success(t('article.delete.success'));
}
</script>

<template>
    <n-table :bordered="false" :single-line="false">
        <thead>
            <tr>
                <th>ID</th>
                <th>Заголовок</th>
                <th>Слаг</th>
                <th>Статус</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <ArticleCard v-for="item in items" v-bind="item" @delete="deleteArticle" />
        </tbody>
    </n-table>
</template>

<style scoped></style>