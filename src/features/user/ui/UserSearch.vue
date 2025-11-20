<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const search = ref('');

const emit = defineEmits<{
    (e: 'search', str: string): void
}>()

const handleSubmit = () => {
    emit('search', search.value);
}
</script>

<template>
    <n-form class="form" @submit.prevent="handleSubmit">
        <n-input v-model:value="search" id="search" type="text" :placeholder="t('user.search.placeholder')" />
        <n-button attr-type="submit" type="primary">
            {{ t('user.search.button') }}
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