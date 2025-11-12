<script setup lang="ts">
</script>
<template>
    <form class="form">
        <slot></slot>
    </form>
</template>
<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>