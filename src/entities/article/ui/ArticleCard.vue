<script setup lang="ts">
import { EditBtn, DeleteBtn } from '@/shared/ui';
import { ROUTES } from '@/shared/routes/routes';

interface Props {
    id: number
    title: string
    slug: string
    status: string
}

defineProps<Props>();

const emit = defineEmits<{
    (event: 'delete', id: number): void
}>();
</script>

<template>
    <tr>
        <td>{{ id }}</td>
        <td>{{ title }}</td>
        <td>{{ slug }}</td>
        <td>{{ status }}</td>
        <td>
            <EditBtn :id="id" :route-name="ROUTES.ARTICLE_EDIT.NAME" :title-key="'article.edit.button'" />
            <DeleteBtn :button-text="'article.delete.button'" :confirm-text="'article.delete.confirm'"
                @confirm="emit('delete', id)" />
        </td>
    </tr>
</template>

<style scoped></style>