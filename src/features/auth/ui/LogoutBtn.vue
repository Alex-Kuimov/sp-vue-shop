<script setup lang="ts">
import { useRouter } from 'vue-router';
import { authService } from '../model/auth.service';
import { ROUTES } from '@/shared/routes';

const router = useRouter();

const handleClick = async () => {
    const response = await authService.logout();
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