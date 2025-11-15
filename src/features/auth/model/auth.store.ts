import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { LoginRequest } from './auth.interface';
import { loginApi, logoutApi } from '../api/auth.request';
import { extractApiError } from '@/shared/api';

export const useAuthStore = defineStore('auth', () => {
    const loading = ref<boolean>(false);
    const token = ref<string | null>(localStorage.getItem('authToken'));
    const error = ref<string | null>(null);

    const isAuth = computed(() => !!token.value);

    const setToken = (value: string) => {
        localStorage.setItem('authToken', value);
        token.value = value;
    };

    const clearToken = () => {
        localStorage.removeItem('authToken');
        token.value = null;
    };

    const login = async (userData: LoginRequest) => {
        loading.value = true;
        error.value = null;

        try {
            const token = await loginApi(userData);
            setToken(token);
            return true;
        } catch (err: unknown) {
            const apiError = extractApiError(err);
            error.value = apiError.message;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    const logout = async () => {
        loading.value = true;
        error.value = null;

        try {
            await logoutApi();
            clearToken();
            return true;
        } catch (err: unknown) {
            const apiError = extractApiError(err);
            error.value = apiError.message;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    return { login, logout, isAuth, loading, error };
});