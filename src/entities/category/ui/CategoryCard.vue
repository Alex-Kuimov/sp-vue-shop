<script setup lang="ts">
import { EditBtn, DeleteBtn } from '@/shared/ui';
import { ROUTES } from '@/shared/routes/routes';

interface Props {
    id: number
    name: string
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
        <td>{{ name }}</td>
        <td>{{ slug }}</td>
        <td>{{ status }}</td>
        <td>
            <EditBtn :id="id" :route-name="ROUTES.CATEGORY_EDIT.NAME" :title-key="'category.edit.button'" />
            <DeleteBtn :button-text="'category.delete.button'" :confirm-text="'category.delete.confirm'"
                @confirm="emit('delete', id)" />
        </td>
    </tr>
</template>

<style scoped></style>