<script setup lang="ts">
</script>
<template>
    <div class="form-field">
        <slot></slot>
    </div>
</template>
<style scoped>
.form-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>