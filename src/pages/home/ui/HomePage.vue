<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UserCreateBtn } from '@/features/user/';

const { t } = useI18n();
</script>
<template>
    <n-h1>{{ t('pages.home') }}</n-h1>
    <UserCreateBtn />
</template>
<style scoped></style>