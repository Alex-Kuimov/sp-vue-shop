import type { UserCreateDTO, UserUpdateDTO } from '@/entities/user/model';
import { useUserStore } from '@/entities/user/model';
import { getUser, getUsers, createUser, updateUser, deleteUser } from '@/entities/user/api/user.request';
import { extractApiError } from '@/shared/api';

async function withStore<T>(fn: (store: ReturnType<typeof useUserStore>) => Promise<T>) {
    const store = useUserStore();
    store.loading = true;
    store.errorMessage = null;
    store.validationErrors = null;

    try {
        return await fn(store);
    } catch (err) {
        const apiError = extractApiError(err);
        store.errorMessage = apiError.message;
        store.validationErrors = apiError.errors ?? null;
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

    getItems() {
        return withStore(async (store) => {
            const res = await getUsers();
            store.items = res.data;
            return res.data;
        });
    },

    createItem(data: UserCreateDTO) {
        return withStore(async (store) => {
            const res = await createUser(data);
            store.items.push(res.data);
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
        return withStore(async (store) => {
            await deleteUser(id);
            store.items = store.items.filter(i => i.id !== id);
        });
    },
};
