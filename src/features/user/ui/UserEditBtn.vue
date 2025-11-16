<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ROUTES } from '@/shared/routes/routes';

const { id } = defineProps<{ id: number }>();
const router = useRouter();

const onClick = () => {
    router.push({
        name: ROUTES.USER_EDIT.NAME,
        params: { id },
    });
}
</script>

<template>
    <n-button @click="onClick">
        Редактировать
    </n-button>
</template>