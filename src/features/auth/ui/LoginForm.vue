<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useLoginForm } from '../hooks/useLoginForm';

const { t } = useI18n();

const {
    authStore,
    form,
    rules,
    formRef,
    login,
} = useLoginForm();
</script>

<template>
    <n-form ref="formRef" class="form" :model="form" :rules="rules" @submit.prevent="login">
        <n-form-item :label="t('auth.login.form.email_label')" path="email">
            <n-input v-model:value="form.email" type="email" :placeholder="t('auth.login.form.email_placeholder')"
                :disabled="authStore.loading" />
        </n-form-item>

        <n-form-item :label="t('auth.login.form.password_label')" path="password">
            <n-input v-model:value="form.password" type="password" :placeholder="t('auth.login.form.password_placeholder')"
                :disabled="authStore.loading" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :disabled="authStore.loading">
            {{ authStore.loading ? t('auth.login.form.loading') : t('auth.login.form.submit') }}
        </n-button>
    </n-form>
</template>

<style scoped></style>