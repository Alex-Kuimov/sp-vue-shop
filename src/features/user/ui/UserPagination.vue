<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    page: number
    totalPages: number
}>();

const emit = defineEmits<{
    (e: 'update:page', value: number): void
}>();

const handleInternalPageChange = (page: number) => {
    emit('update:page', page);
};
</script>

<template>
    <n-pagination :page="props.page" :page-count="props.totalPages" @update:page="handleInternalPageChange" />
</template>

<style scoped>
.n-pagination {
    margin-top: 30px;
}
</style>