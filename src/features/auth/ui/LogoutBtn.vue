<script setup lang="ts">
import { Button } from "@/shared/ui";
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
    <Button type="button" @click="handleClick">
        <slot></slot>
    </Button>
</template>

<style scoped></style>