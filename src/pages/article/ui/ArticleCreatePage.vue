<script setup lang="ts">
import { computed } from 'vue';
import { useArticleStore } from '@/entities/article/model';
import { articleService } from '@/features/article/model';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ArticleCreateForm } from '@/features/article';
import { ROUTES } from '@/shared/routes';
import { useYupValidation } from '@/shared/lib/';
import { articleCreateSchema } from '@/entities/article/model';
import type { ArticleCreateDTO } from '@/entities/article/model';

const { t } = useI18n();
const { clientErrors, validate } = useYupValidation(articleCreateSchema(t));
const articleStore = useArticleStore();
const router = useRouter();

const validationErrors = computed(() => articleStore.errorMessages ?? clientErrors.value);

const handleCreate = async (formData: ArticleCreateDTO) => {
    articleStore.errorMessages = null;
    clientErrors.value = null;

    if (!(await validate(formData))) {
        return false
    };

    try {
        await articleService.createItem(formData);

        articleStore.currentPage = 1;
        router.push({ name: ROUTES.ARTICLES.NAME, params: { page: articleStore.currentPage } });

        await articleService.getItems(articleStore.currentPage);
    } catch (e) {
        console.error('Ошибка при создании статьи', e)
    }
}
</script>

<template>
    <n-h1>{{ t('article.create.page_title') }}</n-h1>
    <ArticleCreateForm :validationErrors="validationErrors" :loading="articleStore.loading" @submit="handleCreate" />
</template>