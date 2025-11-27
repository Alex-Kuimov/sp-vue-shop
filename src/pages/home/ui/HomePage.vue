<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CreateBtn } from '@/shared/ui';
import { ROUTES } from '@/shared/routes';

const { t } = useI18n();
</script>
<template>
    <n-h1>{{ t('pages.home') }}</n-h1>
    <CreateBtn :route-name="ROUTES.CATEGORY_CREATE.NAME" :title-key="'category.create.title'" />
    <CreateBtn :route-name="ROUTES.USER_CREATE.NAME" :title-key="'user.create.title'" />
</template>
<style scoped></style>