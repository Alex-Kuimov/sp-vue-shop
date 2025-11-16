<script setup lang="ts">
import { onMounted } from 'vue'
import { UserCreateBtn } from '@/features/user/';
import { UserListWidget } from '@/widgets/user/';
import { useUserStore, userService } from '@/entities/user/model';

const userStore = useUserStore();

onMounted(async () => {
    userService.getItems();
});
</script>

<template>
    <n-h1>Список пользователей</n-h1>
    <UserCreateBtn />
    <UserListWidget :users="userStore.items" />
</template>

<style scoped></style>