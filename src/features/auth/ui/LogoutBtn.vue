<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '../model/auth.store';
import { ROUTES } from '@/shared/routes';

const auth = useAuthStore();
const router = useRouter();

const handleClick = async () => {
    const response = await auth.logout();
    if (response) {
        router.push(ROUTES.LOGIN.PATH);
    }
};
</script>

<template>
    <n-button @click="handleClick">
        <slot></slot>
    </n-button>
</template>

<style scoped></style>