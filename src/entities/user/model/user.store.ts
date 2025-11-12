import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User, UserCreateDTO, UserUpdateDTO } from './user.interface';
import { getUser, getUsers, createUser, updateUser } from '../api/user.request';
import type { ApiError } from '@/shared/api/';

export const useUserStore = defineStore('user', () => {
    const items = ref<User[] | null>(null);
    const loading = ref(false);
    const error = ref<ApiError | null>(null);
    const errors = ref<Record<string, string[]> | null>(null);

    const getItem = async (id: number) => {
        try {
            loading.value = true;
            error.value = null;
            return await getUser(id);
        } catch (err) {
            error.value = err as ApiError;
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
        } catch (err) {
            error.value = err as ApiError;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    const createItem = async (data: UserCreateDTO) => {
        try {
            loading.value = true;
            error.value = null;
            const res = await createUser(data);
            return res.data;
        } catch (err) {
            error.value = err as ApiError;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    const updateItem = async (id: number, data: UserUpdateDTO) => {
        try {
            loading.value = true;
            error.value = null;
            const res = await updateUser(id, data);
            return res.data;
        } catch (err) {
            const apiError = err as ApiError;

            error.value = apiError;

            if (apiError.errors) {
                errors.value = apiError.errors;
            }

            throw err;
        } finally {
            loading.value = false;
        }
    };

    return { items, error, errors, loading, getItem, getItems, createItem, updateItem };
});