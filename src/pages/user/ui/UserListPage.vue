<script setup lang="ts">
import { onMounted } from 'vue'
import { UserCreateBtn, UserPagination, UserSearch } from '@/features/user/';
import { UserListWidget } from '@/widgets/user/';
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';

const userStore = useUserStore();

onMounted(async () => {
    userService.getItems();
});
</script>

<template>
    <n-h1>Список пользователей</n-h1>
    <UserCreateBtn />
    <UserSearch />
    <UserListWidget :users="userStore.items" />
    <UserPagination />
</template>

<style scoped></style>