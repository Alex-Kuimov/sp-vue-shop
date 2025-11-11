<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/entities/user';
import UserCard from '@/entities/user/ui/UserCard.vue';

const userStore = useUserStore();

onMounted(async () => {
    userStore.getItems();
});

</script>
<template>
    <p>Я виджет списка пользователей</p>

    <UserCard v-for="user in userStore.items" v-bind="user" />
</template>
<style scoped></style>