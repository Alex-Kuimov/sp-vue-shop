<script setup lang="ts">
defineProps<{
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
    <n-pagination :page="page" :page-count="totalPages" @update:page="handleInternalPageChange" />
</template>

<style scoped>
.n-pagination {
    margin-top: 30px;
}
</style>