<script setup lang="ts">
defineProps<{
    error: string | null;
}>();
</script>

<template>
    <div v-if="error" class="error-message">
        <span>{{ error }}</span>
    </div>
</template>

<style scoped>
.error-message {
    color: #cc0000;
    font-size: 14px;
}
</style>