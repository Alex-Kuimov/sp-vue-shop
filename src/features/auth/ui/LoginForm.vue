<script setup lang="ts">
import { ref } from 'vue';
import { Input, Button, Label, Form, FormField } from "@/shared/ui";
import { useRouter } from 'vue-router';
import { useAuthStore } from '../model/auth.store';
import type { LoginForm } from '../model/auth.interface';
import { ROUTES } from '@/shared/routes';
import { notification } from '@/shared/lib';
import ErrorMessage from '@/shared/ui/ErrorMessage.vue';

const form = ref<LoginForm>({
    email: '',
    password: '',
});

const auth = useAuthStore();
const router = useRouter();

const handleSubmit = async () => {
    try {
        const response = await auth.login(form.value);

        if (response) {
            notification.success('Вход выполнен успешно');
        }
    } catch (error) {
        notification.error('Ошибка входа');
    } finally {
        router.push(ROUTES.HOME.PATH);
    }
};
</script>

<template>
    <Form @submit.prevent="handleSubmit">
        <FormField>
            <Label for="email">Email:</Label>
            <Input id="email" v-model="form.email" type="email" placeholder="Введите email" :disabled="auth.loading"
                required />
        </FormField>

        <FormField>
            <Label for="password">Пароль:</Label>
            <Input id="password" v-model="form.password" type="password" placeholder="Введите пароль"
                :disabled="auth.loading" required />
        </FormField>

        <Button type="submit" :disabled="auth.loading">
            {{ auth.loading ? 'Вход...' : 'Войти' }}
        </Button>

        <ErrorMessage :error="auth.error" />
    </Form>
</template>

<style scoped></style>