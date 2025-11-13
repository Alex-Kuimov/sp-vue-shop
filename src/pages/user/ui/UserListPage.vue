<script setup lang="ts">
import { onMounted } from 'vue'
import { UserCreateBtn } from '@/features/user/';
import { UserListWidget } from '@/widgets/user/';
import { useUserStore } from '@/entities/user/model';

const userStore = useUserStore();

onMounted(async () => {
    userStore.getItems();
});
</script>

<template>
    <p>Список пользователей</p>
    <UserCreateBtn />
    <UserListWidget :users="userStore.items" />
</template>

<style scoped></style>