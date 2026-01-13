import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Category } from './category.interface';

export const useCategoryStore = defineStore('category', () => {
    const items = ref<Category[]>([]);
    const item = ref<Category | null>(null);

    const loading = ref(false);
    const errorMessage = ref<string | null>(null);
    const errorMessages = ref<Record<string, string[]> | null>(null);

    const currentPage = ref<number>(1);
    const totalPages = ref<number>(1);

    return {
        items,
        item,
        loading,
        errorMessage,
        errorMessages,
        currentPage,
        totalPages,
    };
});