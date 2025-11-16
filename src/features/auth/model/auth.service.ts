
import { useAuthStore } from './auth.store';
import type { LoginRequest } from './auth.interface';
import { loginApi, logoutApi } from '../api/auth.request';
import { extractApiError } from '@/shared/api';

async function withStore<T>(fn: (store: ReturnType<typeof useAuthStore>) => Promise<T>) {
    const store = useAuthStore();
    store.loading = true;
    store.errorMessage = null;

    try {
        return await fn(store);
    } catch (err) {
        const apiError = extractApiError(err);
        store.errorMessage = apiError.message;
        throw err;
    } finally {
        store.loading = false;
    }
}

export const authService = {
    login(userData: LoginRequest) {
        return withStore(async (store) => {
            const token = await loginApi(userData);
            store.token = token;
            localStorage.setItem('authToken', token);
            return true;
        });
    },

    logout() {
        return withStore(async (store) => {
            await logoutApi();
            store.token = null;
            localStorage.removeItem('authToken');
            return true;
        });
    },
};
