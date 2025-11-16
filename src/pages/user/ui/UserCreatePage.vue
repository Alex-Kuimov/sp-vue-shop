<script setup lang="ts">
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';
import { useRouter } from 'vue-router';
import { UserCreateForm } from '@/entities/user/ui';
import { ROUTES } from '@/shared/routes';
import type { UserCreateDTO } from '@/entities/user/model'

const userStore = useUserStore();
const router = useRouter();

const handleCreate = async (formData: UserCreateDTO) => {
    try {
        await userService.createItem(formData)
        router.push(ROUTES.USERS.PATH)
    } catch (e) {
        console.error('Ошибка при создании пользователя', e)
    }
}
</script>

<template>
    <n-h1>Новый пользователь</n-h1>
    <UserCreateForm :errors="userStore.errors" :loading="userStore.loading" @submit="handleCreate" />
</template>

<style scoped></style>