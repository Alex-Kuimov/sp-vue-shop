import { useCategoryStore } from '@/entities/category/model/';
import { getCategory, getCategories, createCategory, updateCategory, deleteCategory } from '@/entities/category/api/category.request';
import { extractApiError } from '@/shared/api';
import type { CategoryCreateDTO, CategoryUpdateDTO } from '@/entities/category/model/';

async function withStore<T>(fn: (store: ReturnType<typeof useCategoryStore>) => Promise<T>) {
    const store = useCategoryStore();
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

export const categoryService = {
    getItem(id: number) {
        return withStore(async (store) => {
            const item = await getCategory(id);
            store.item = item;
            return item;
        });
    },

    getItems(page: number = 1, search: string = '') {
        return withStore(async (store) => {
            const res = await getCategories(page, search);
            store.items = res.data;
            store.currentPage = res.current_page;
            store.totalPages = res.last_page;
            return res.data;
        });
    },

    createItem(data: CategoryCreateDTO) {
        return withStore(async () => {
            const res = await createCategory(data);
            return res.data;
        });
    },

    updateItem(id: number, data: CategoryUpdateDTO) {
        return withStore(async () => {
            const res = await updateCategory(id, data);
            return res.data;
        });
    },

    deleteItem(id: number) {
        return withStore(async () => {
            await deleteCategory(id);
        });
    },
};
