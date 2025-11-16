<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { UserUpdateForm } from '@/entities/user/ui';
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';
import { Loader } from '@/shared/ui';
import { notification } from '@/shared/lib';
import type { UserUpdateDTO } from '@/entities/user/model';

const route = useRoute()
const userStore = useUserStore()

const user = ref<UserUpdateDTO | null>(null)

const handleEdit = async (data: UserUpdateDTO) => {
    const id = Number(route.params.id);
    try {
        await userService.updateItem(id, data);
        notification.success('Пользователь успешно обновлен');
    } catch (err) {
        console.error('Ошибка обновления пользователя', err);
        notification.error('Ошибка обновления пользователя');
    }
}

onMounted(async () => {
    const id = Number(route.params.id);
    try {
        const item = await userService.getItem(id);
        user.value = { name: item.name, email: item.email };
    } catch (err) {
        console.error('Ошибка загрузки пользователя', err);
        notification.error('Ошибка загрузки пользователя');
    }
});
</script>

<template>
    <n-h1>Редактировать пользователя</n-h1>
    <UserUpdateForm :user="user" :validationErrors="userStore.validationErrors" :loading="userStore.loading" @submit="handleEdit" />
    <Loader v-if="userStore.loading" />
</template>
