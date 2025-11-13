<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ROUTES } from '@/shared/routes/routes';

const props = defineProps<{ id: number }>();
const router = useRouter();

const onClick = () => {
    router.push({
        name: ROUTES.USER_EDIT.NAME,
        params: { id: props.id },
    });
}
</script>

<template>
    <button @click="onClick">Редактировать</button>
</template>