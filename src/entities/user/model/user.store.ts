import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User, UserCreateDTO } from './user.interface';
import { getUser, getUsers, createUser } from '../api/user.request';

export const useUserStore = defineStore('user', () => {
    const item = ref<User | null>(null);
    const items = ref<User[] | null>(null);

    const getItem = async (id: number) => {
        item.value = await getUser(id);
    };

    const getItems = async () => {
        const res = await getUsers();
        items.value = res.data;
    };

    const createItem = async (data: UserCreateDTO) => {
        const res = await createUser(data);
        item.value = res.data;
    };

    return { item, items, getItem, getItems, createItem };
});