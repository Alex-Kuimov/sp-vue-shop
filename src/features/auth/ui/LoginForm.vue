<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { LoginData } from '../model/auth.interface';
import { ErrorMessage } from "@/shared/ui";

const { t } = useI18n();

defineProps<{
    validationErrors: Record<string, string[]> | null,
    loading?: boolean,
}>();

const emit = defineEmits<{
    (e: 'login', data: LoginData): void
}>();

const form = ref<LoginData>({
    email: '',
    password: '',
});

const handleSubmit = () => {
    emit('login', form.value);
}
</script>

<template>
    <n-form ref="formRef" class="form" @submit.prevent="handleSubmit">
        <n-form-item :label="t('auth.login.form.email_label')" path="email">
            <n-input v-model:value="form.email" type="email" :placeholder="t('auth.login.form.email_placeholder')"
                :disabled="loading" />
            <ErrorMessage :error="validationErrors?.email?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('auth.login.form.password_label')" path="password">
            <n-input v-model:value="form.password" type="password"
                :placeholder="t('auth.login.form.password_placeholder')" :disabled="loading" />
            <ErrorMessage :error="validationErrors?.password?.[0] || null" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :disabled="loading">
            {{ loading ? t('auth.login.form.loading') : t('auth.login.form.submit') }}
        </n-button>
    </n-form>
</template>

<style scoped></style>