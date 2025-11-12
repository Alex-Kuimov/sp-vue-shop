<script setup lang="ts">
import { computed } from 'vue';
import type { ApiError } from '@/shared/api/';

const props = defineProps<{
    error?: ApiError | null;
}>();

const message = computed(() =>
    typeof props.error === 'string'
        ? props.error
        : props.error?.message || 'Неизвестная ошибка'
);
</script>

<template>
    <div v-if="error" class="error-message">
        <span>Ошибка:</span>
        <span>{{ message }}</span>
    </div>
</template>

<style scoped>
.error-message {
    background-color: #ffe5e5;
    border: 1px solid #ffcccc;
    color: #cc0000;
    padding: 10px 12px;
    border-radius: 6px;
    margin: 8px 0;
    font-size: 14px;
}
</style>