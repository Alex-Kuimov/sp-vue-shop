<script setup lang="ts">
import { EditBtn } from '@/shared/ui';
import { ROUTES } from '@/shared/routes/routes';
import { UserDeleteBtn } from '@/features/user/';

interface Props {
    id: number
    name: string
    email: string
    role: string
}

defineProps<Props>();
</script>

<template>
    <tr>
        <td>{{ id }}</td>
        <td>{{ name }}</td>
        <td>{{ email }}</td>
        <td>{{ role }}</td>
        <td>
            <EditBtn
                :id="id"
                :route-name="ROUTES.USER_EDIT.NAME"
                :title-key="'user.edit.button'"
            />
            <UserDeleteBtn :id="id" />
        </td>
    </tr>
</template>

<style scoped></style>