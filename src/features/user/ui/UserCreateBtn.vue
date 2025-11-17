<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ROUTES } from '@/shared/routes/routes';

const { t } = useI18n();

const router = useRouter();

const onClick = () => {
    router.push({
        name: ROUTES.USER_CREATE.NAME,
    });
}
</script>

<template>
    <n-button @click="onClick">
        {{ t('user.create.title') }}
    </n-button>
</template>

<style scoped>
.n-button {
    margin-bottom: 30px;
}
</style>