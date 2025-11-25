<script setup lang="ts">
import { CategoryCard } from '@/entities/category/ui'
import type { Category } from '@/entities/category/model'

const { items } = defineProps<{ items: Category[] | null }>();
</script>
<template>
    <n-table :bordered="false" :single-line="false">
        <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Слаг</th>
                <th>Статус</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <CategoryCard v-for="item in items" v-bind="item" />
        </tbody>
    </n-table>
</template>
<style scoped></style>