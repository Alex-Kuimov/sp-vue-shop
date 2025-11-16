<script setup lang="ts">
import { ref } from 'vue';

const search = ref('');

</script>

<template>
    <n-form class="form">
        <n-input v-model:value="search" id="search" type="text" placeholder="Поиск..." />

        <n-button type="primary">
            Найти
        </n-button>
    </n-form>

</template>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

</style>