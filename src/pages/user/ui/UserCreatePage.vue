<script setup lang="ts">
import { useUserStore } from '@/entities/user/model';
import { useRouter } from 'vue-router';
import { UserForm } from '@/entities/user/ui';
import { ROUTES } from '@/shared/routes';
import type { UserCreateDTO } from '@/entities/user/model'

const userStore = useUserStore();
const router = useRouter();

const handleCreate = async (formData: UserCreateDTO) => {
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