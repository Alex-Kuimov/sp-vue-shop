import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User, UserCreateDTO, UserUpdateDTO } from './user.interface';
import { getUser, getUsers, createUser, updateUser } from '../api/user.request';

export const useUserStore = defineStore('user', () => {
    const items = ref<User[] | null>(null);

    const getItem = async (id: number) => {
        return await getUser(id);
    };

    const getItems = async () => {
        const res = await getUsers();
        items.value = res.data;
    };

    const createItem = async (data: UserCreateDTO) => {
        const res = await createUser(data);
        return res.data;
    };

    const updateItem = async (id: number, data: UserUpdateDTO) => {
        const res = await updateUser(id, data);
        return res.data;
    };

    return { items, getItem, getItems, createItem, updateItem };
});