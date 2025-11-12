<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: 'Загрузка...',
    },
});
</script>

<template>
    <div class="loader">
        <span class="loader-text">{{ text }}</span>
    </div>
</template>

<style scoped>
.loader {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    color: #555;
    font-size: 14px;
}
</style>