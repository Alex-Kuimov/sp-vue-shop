<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['confirm']);

defineProps<{
    buttonText: string
    confirmText: string
}>()

const { t } = useI18n();

const onClick = () => emit('confirm');
</script>

<template>
    <n-popconfirm @positive-click="onClick" negative-text="Нет" positive-text="Да, уверен">
        <template #trigger>
            <n-button strong secondary type="error">
                {{ t(buttonText) }}
            </n-button>
        </template>

        {{ t(confirmText) }}
    </n-popconfirm>
</template>

<style scoped>
.n-button {
    margin-right: 10px;
}
</style>