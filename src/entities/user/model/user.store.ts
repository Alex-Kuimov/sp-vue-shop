import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User, UserCreateDTO, UserUpdateDTO } from './user.interface';
import { getUser, getUsers, createUser, updateUser, deleteUser } from '../api/user.request';
import { extractApiError } from '@/shared/api';


export const useUserStore = defineStore('user', () => {
    const items = ref<User[] | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);
    const errors = ref<Record<string, string[]> | null>(null);

    const getItem = async (id: number) => {
        try {
            loading.value = true;
            error.value = null;
            return await getUser(id);
        } catch (err: unknown) {
            const apiError = extractApiError(err);
            error.value = apiError.message;
            errors.value = apiError.errors ?? null;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    const getItems = async () => {
        try {
            loading.value = true;
            error.value = null;
            const res = await getUsers();
            items.value = res.data;
        } catch (err: unknown) {
            const apiError = extractApiError(err);
            error.value = apiError.message;
            errors.value = apiError.errors ?? null;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    const createItem = async (data: UserCreateDTO) => {
        try {
            loading.value = true;
            error.value = null;
            errors.value = null;
            const res = await createUser(data);
            return res.data;
        } catch (err: unknown) {
            const apiError = extractApiError(err);
            error.value = apiError.message;
            errors.value = apiError.errors ?? null;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    const updateItem = async (id: number, data: UserUpdateDTO) => {
        try {
            loading.value = true;
            error.value = null;
            errors.value = null;
            const res = await updateUser(id, data);
            return res.data;
        } catch (err: unknown) {
            const apiError = extractApiError(err);
            error.value = apiError.message;
            errors.value = apiError.errors ?? null;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    const deleteItem = async (id: number) => {
        try {
            loading.value = true;
            error.value = null;
            const res = await deleteUser(id);
            return res.data;
        } catch (err: unknown) {
            const apiError = extractApiError(err);
            error.value = apiError.message;
            throw err;
        } finally {
            items.value = items.value ? items.value.filter(item => item.id !== id) : null;
            loading.value = false;
        }
    };

    return { items, error, errors, loading, getItem, getItems, createItem, updateItem, deleteItem };
});