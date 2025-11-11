<script setup lang="ts">
import { onMounted } from 'vue'
import { UserListWidget } from '@/widgets/user/';
import { useUserStore } from '@/entities/user';

const userStore = useUserStore();

onMounted(async () => {
    userStore.getItems();
});
</script>

<template>
    <p>Список пользователей</p>
    <UserListWidget :users="userStore.items" />
</template>

<style scoped></style>