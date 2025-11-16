<script setup lang="ts">
import { useLoginForm } from '../hooks/useLoginForm';

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
        <n-form-item label="E-mail:" path="email">
            <n-input v-model:value="form.email" type="email" placeholder="Введите email"
                :disabled="authStore.loading" />
        </n-form-item>

        <n-form-item label="Пароль:" path="password">
            <n-input v-model:value="form.password" type="password" placeholder="Введите пароль"
                :disabled="authStore.loading" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :disabled="authStore.loading">
            {{ authStore.loading ? 'Вход...' : 'Войти' }}
        </n-button>
    </n-form>
</template>

<style scoped></style>