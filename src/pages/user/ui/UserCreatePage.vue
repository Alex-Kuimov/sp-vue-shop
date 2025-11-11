<script setup lang="ts">
import { useUserStore } from '@/entities/user';
import { useRouter } from 'vue-router';
import { UserForm } from '@/entities/user/';
import { ROUTES } from '@/shared/routes';

const userStore = useUserStore();
const router = useRouter()

const handleCreate = async (formData: any) => {
    try {
        await userStore.createItem(formData)
        router.push(ROUTES.USERS.PATH)
    } catch (e) {
        console.error('Ошибка при создании пользователя', e)
    }
}
</script>

<template>
    <p>Новый пользователь</p>
    <UserForm @submit="handleCreate" />
</template>

<style scoped></style>