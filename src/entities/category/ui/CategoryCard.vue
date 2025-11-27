<script setup lang="ts">
import { EditBtn } from '@/shared/ui';
import { ROUTES } from '@/shared/routes/routes';
import { CategoryDeleteBtn } from '@/features/category/';

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
            <EditBtn
                :id="id"
                :route-name="ROUTES.CATEGORY_EDIT.NAME"
                :title-key="'category.edit.button'"
            />
            <CategoryDeleteBtn :id="id" />
        </td>
    </tr>
</template>

<style scoped></style>