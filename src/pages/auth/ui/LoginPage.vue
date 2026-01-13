<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { LoginForm } from '@/features/auth/';
import { useYupValidation, notification } from '@/shared/lib/';
import { authLoginSchema, useAuthStore, authService } from '@/features/auth/model/';
import { ROUTES } from '@/shared/routes';
import type { LoginData } from '@/features/auth/model/auth.interface';

const { t } = useI18n();
const router = useRouter();
const authStore = useAuthStore();
const { clientErrors, validate } = useYupValidation(authLoginSchema(t));

const validationErrors = computed(() => authStore.errorMessages ?? clientErrors.value);

const handleLogin = async (formData: LoginData) => {
    authStore.errorMessages = null;
    clientErrors.value = null;

    if (!(await validate(formData))) {
        return false
    };

    try {
        const success = await authService.login(formData);

        if (success) {
            notification.success(t('auth.login.success'));
            router.push(ROUTES.HOME.PATH);
        }
    } catch {
        notification.error(`${t('auth.login.error_prefix')}${authStore.errorMessage}`);
    }
}
</script>

<template>
    <div class="auth-page">
        <n-h1>{{ t('auth.login.page_title') }}</n-h1>
        <LoginForm :validationErrors="validationErrors" @login="handleLogin" />
    </div>
</template>

<style scoped>
.auth-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>