<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ROUTES } from '@/shared/routes/routes';

const { t } = useI18n();

const { id } = defineProps<{ id: number }>();
const router = useRouter();

const onClick = () => {
    router.push({
        name: ROUTES.USER_EDIT.NAME,
        params: { id },
    });
}
</script>

<template>
    <n-button @click="onClick">
        {{ t('user.edit.button') }}
    </n-button>
</template>