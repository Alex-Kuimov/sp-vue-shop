<script setup lang="ts">
import { CategoryEditBtn, CategoryDeleteBtn } from '@/features/category/';

interface Props {
    id: number
    name: string
    slug: string
    status: string
}

defineProps<Props>();
</script>

<template>
    <tr>
        <td>{{ id }}</td>
        <td>{{ name }}</td>
        <td>{{ slug }}</td>
        <td>{{ status }}</td>
        <td>
            <CategoryEditBtn :id="id" />
            <CategoryDeleteBtn :id="id" />
        </td>
    </tr>
</template>

<style scoped></style>