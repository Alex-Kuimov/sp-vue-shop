<script setup lang="ts">
const value = defineModel<string>();
</script>
<template>
    <input v-model="value" />
</template>
<style scoped></style>