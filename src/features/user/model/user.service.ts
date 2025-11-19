import type { UserCreateDTO, UserUpdateDTO } from '@/entities/user/model';
import { useUserStore } from '@/entities/user/model';
import { getUser, getUsers, createUser, updateUser, deleteUser } from '@/entities/user/api/user.request';
import { extractApiError } from '@/shared/api';

async function withStore<T>(fn: (store: ReturnType<typeof useUserStore>) => Promise<T>) {
    const store = useUserStore();
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

export const userService = {
    getItem(id: number) {
        return withStore(async (store) => {
            const item = await getUser(id);
            store.item = item;
            return item;
        });
    },

    getItems(page: number = 1) {
        return withStore(async (store) => {
            const res = await getUsers(page);
            store.items = res.data;
            store.currentPage = res.current_page;
            store.totalPages = res.last_page;
            return res.data;
        });
    },

    createItem(data: UserCreateDTO) {
        return withStore(async () => {
            const res = await createUser(data);
            return res.data;
        });
    },

    updateItem(id: number, data: UserUpdateDTO) {
        return withStore(async () => {
            const res = await updateUser(id, data);
            return res.data;
        });
    },

    deleteItem(id: number) {
        return withStore(async () => {
            await deleteUser(id);
        });
    },
};
