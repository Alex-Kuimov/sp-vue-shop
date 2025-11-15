<script setup lang="ts">
import { useLoginForm } from './useLoginForm';

const {
    auth,
    form,
    rules,
    formRef,
    handleSubmit,
} = useLoginForm();
</script>

<template>
    <n-form ref="formRef" class="form" :model="form" :rules="rules">
        <n-form-item label="E-mail:" path="email">
            <n-input v-model:value="form.email" type="email" placeholder="Введите email" :disabled="auth.loading" />
        </n-form-item>

        <n-form-item label="Пароль:" path="password">
            <n-input v-model:value="form.password" type="password" placeholder="Введите пароль"
                :disabled="auth.loading" />
        </n-form-item>

        <n-button type="primary" :disabled="auth.loading" @click="handleSubmit">
            {{ auth.loading ? 'Вход...' : 'Войти' }}
        </n-button>
    </n-form>
</template>

<style scoped></style>