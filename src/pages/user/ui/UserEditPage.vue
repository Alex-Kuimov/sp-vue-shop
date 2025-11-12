<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { UserUpdateForm } from '@/entities/user/ui';
import { useUserStore } from '@/entities/user/model';
import { Loader } from '@/shared/ui';
import type { UserUpdateDTO } from '@/entities/user/model';

const route = useRoute()
const userStore = useUserStore()

const user = ref<UserUpdateDTO | null>(null)

const handleEdit = async (data: UserUpdateDTO) => {
    const id = Number(route.params.id);
    await userStore.updateItem(id, data);
}

onMounted(async () => {
    const id = Number(route.params.id);
    const item = await userStore.getItem(id);

    user.value = {
        name: item.name,
        email: item.email
    }
});
</script>

<template>
    <p>Редактировать пользователя</p>
    <UserUpdateForm :user="user" :errors="userStore.errors" @submit="handleEdit" />

    <Loader v-if="userStore.loading" />

    {{ userStore.error }}
</template>
