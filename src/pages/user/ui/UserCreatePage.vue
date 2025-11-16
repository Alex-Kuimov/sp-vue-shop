<script setup lang="ts">
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';
import { useRouter } from 'vue-router';
import { UserCreateForm } from '@/features/user';
import { ROUTES } from '@/shared/routes';
import type { UserCreateDTO } from '@/entities/user/model'

const userStore = useUserStore();
const router = useRouter();

const handleCreate = async (formData: UserCreateDTO) => {
    try {
        await userService.createItem(formData);

        userStore.currentPage = 1;
        router.push({ name: ROUTES.USERS.NAME, params: { page: userStore.currentPage } });

        await userService.getItems(userStore.currentPage);
    } catch (e) {
        console.error('Ошибка при создании пользователя', e)
    }
}
</script>

<template>
    <n-h1>Новый пользователь</n-h1>
    <UserCreateForm :validationErrors="userStore.validationErrors" :loading="userStore.loading"
        @submit="handleCreate" />
</template>

<style scoped></style>