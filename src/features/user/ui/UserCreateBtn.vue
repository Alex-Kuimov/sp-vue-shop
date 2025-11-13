<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ROUTES } from '@/shared/routes/routes';

const router = useRouter();

const onClick = () => {
    router.push({
        name: ROUTES.USER_CREATE.NAME,
    });
}
</script>

<template>
    <button @click="onClick">Создать нового пользователя</button>
</template>