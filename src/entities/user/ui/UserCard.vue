<script setup lang="ts">
import { UserEditBtn, UserDeleteBtn } from '@/features/user/';

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
            <UserEditBtn :id="id" />
            <UserDeleteBtn :id="id" />
        </td>
    </tr>
</template>

<style scoped></style>