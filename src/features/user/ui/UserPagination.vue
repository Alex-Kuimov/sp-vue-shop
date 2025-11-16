<script setup lang="ts">
import { ref } from 'vue';

const page = ref(1);
</script>

<template>
    <n-pagination v-model:page="page" :page-count="100" />
</template>

<style scoped>
    .n-pagination {
        margin-top: 30px;
    }
</style>