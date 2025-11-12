<script setup lang="ts">
import { computed } from 'vue';
import type { ApiError } from '@/shared/api/';

const props = defineProps<{
    error?: ApiError | string[] | null;
}>();

const message = computed(() => {
    // Handle string array case
    if (Array.isArray(props.error)) {
        return props.error[0] || 'Неизвестная ошибка';
    }

    // Handle string case
    if (typeof props.error === 'string') {
        return props.error;
    }

    // Handle ApiError case
    if (props.error?.message) {
        return props.error?.message;
    }

    return 'Неизвестная ошибка';
});
</script>

<template>
    <div v-if="error" class="error-message">

        <span>{{ message }}</span>
    </div>
</template>

<style scoped>
.error-message {
    color: #cc0000;
    font-size: 14px;
}
</style>