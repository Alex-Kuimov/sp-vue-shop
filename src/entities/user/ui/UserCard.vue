<script setup lang="ts">
import { UserEditBtn } from '@/features/user/';

interface Props {
    id: number
    name: string
    email: string
    role: string
}

defineProps<Props>();
</script>

<template>
    <div class="user-card">
        <span>{{ id }}</span>
        <span>{{ name }}</span>
        <span>{{ email }}</span>
        <span>{{ role }}</span>
        <UserEditBtn :id="id" />
    </div>
</template>

<style scoped>
.user-card {
    display: flex;
    flex-direction: row;
    gap: 10px;
    border: 1px solid #ccc;
    padding: 10px;
}
</style>