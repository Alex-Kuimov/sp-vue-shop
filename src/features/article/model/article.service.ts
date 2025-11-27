import type { ArticleCreateDTO, ArticleUpdateDTO } from '@/entities/article/model';
import { useArticleStore } from '@/entities/article/model';
import { getArticle, getArticles, createArticle, updateArticle, deleteArticle } from '@/entities/article/api/article.request';
import { extractApiError } from '@/shared/api';

async function withStore<T>(fn: (store: ReturnType<typeof useArticleStore>) => Promise<T>) {
    const store = useArticleStore();
    store.loading = true;
    store.errorMessage = null;
    store.errorMessages = null;

    try {
        return await fn(store);
    } catch (err) {
        const apiError = extractApiError(err);
        store.errorMessage = apiError.message;
        store.errorMessages = apiError.errors ?? null;
        throw err;
    } finally {
        store.loading = false;
    }
}

export const articleService = {
    getItem(id: number) {
        return withStore(async (store) => {
            const item = await getArticle(id);
            store.item = item;
            return item;
        });
    },

    getItems(page: number = 1, search: string = '') {
        return withStore(async (store) => {
            const res = await getArticles(page, search);
            store.items = res.data;
            store.currentPage = res.current_page;
            store.totalPages = res.last_page;
            return res.data;
        });
    },

    createItem(data: ArticleCreateDTO) {
        return withStore(async () => {
            const res = await createArticle(data);
            return res.data;
        });
    },

    updateItem(id: number, data: ArticleUpdateDTO) {
        return withStore(async () => {
            const res = await updateArticle(id, data);
            return res.data;
        });
    },

    deleteItem(id: number) {
        return withStore(async () => {
            await deleteArticle(id);
        });
    },
};