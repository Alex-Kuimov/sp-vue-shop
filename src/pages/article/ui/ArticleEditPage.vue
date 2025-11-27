<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ArticleUpdateForm } from '@/features/article';
import { useArticleStore } from '@/entities/article/model';
import { articleService } from '@/features/article/model';
import { notification } from '@/shared/lib';
import { articleUpdateSchema } from '@/entities/article/model';
import { useYupValidation } from '@/shared/lib/';
import type { ArticleUpdateDTO } from '@/entities/article/model';

const { t } = useI18n();
const { clientErrors, validate } = useYupValidation(articleUpdateSchema(t));
const route = useRoute();
const articleStore = useArticleStore();

const article = ref<ArticleUpdateDTO | null>(null);

const articleID = computed(() => Number(route.params.id));

const validationErrors = computed(() => articleStore.errorMessages ?? clientErrors.value);

const handleEdit = async (formData: ArticleUpdateDTO) => {
    articleStore.errorMessages = null;
    clientErrors.value = null;

    if (!(await validate(formData))) {
        return false
    };

    try {
        await articleService.updateItem(articleID.value, formData);
        notification.success(t('article.edit.success'));
    } catch (err) {
        console.error('Ошибка обновления статьи', err);
        notification.error(t('article.edit.errors.update'));
    }
}

onMounted(async () => {
    try {
        const item = await articleService.getItem(articleID.value);
        article.value = { ...item };
    } catch (err) {
        console.error('Ошибка загрузки статьи', err);
        notification.error(t('article.edit.errors.load'));
    }
});
</script>

<template>
    <n-h1>{{ t('article.edit.page_title') }}</n-h1>
    <ArticleUpdateForm :article="article" :validationErrors="validationErrors" :loading="articleStore.loading"
        @submit="handleEdit" />
</template>