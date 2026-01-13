<script setup lang="ts">
import { EditBtn, DeleteBtn } from '@/shared/ui';
import { ROUTES } from '@/shared/routes/routes';

interface Props {
    id: number
    name: string
    email: string
    role: string
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
        <td>{{ email }}</td>
        <td>{{ role }}</td>
        <td>
            <EditBtn :id="id" :route-name="ROUTES.USER_EDIT.NAME" :title-key="'user.edit.button'" />

            <DeleteBtn :button-text="'user.delete.button'" :confirm-text="'user.delete.confirm'"
                @confirm="emit('delete', id)" />
        </td>
    </tr>
</template>

<style scoped></style>