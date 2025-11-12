<script setup lang="ts">
import { ref } from 'vue';
import { Input, Button, Label, Form, FormField } from "@/shared/ui";
import { useRouter } from 'vue-router';
import { useAuthStore } from '../model/auth.store';
import type { LoginForm } from '../model/auth.interface';
import { ROUTES } from '@/shared/routes';

const form = ref<LoginForm>({
    email: '',
    password: '',
});

const auth = useAuthStore();
const router = useRouter();

const handleSubmit = async () => {
    const response = await auth.login(form.value);

    if (response) {
        router.push(ROUTES.HOME.PATH);
    }
};
</script>

<template>
    <Form @submit.prevent="handleSubmit">
        <FormField>
            <Label for="email">Email:</Label>
            <Input id="email" v-model="form.email" type="email" placeholder="Введите email" required />
        </FormField>

        <FormField>
            <Label for="password">Пароль:</Label>
            <Input id="password" v-model="form.password" type="password" placeholder="Введите пароль" required />
        </FormField>

        <Button type="submit" :disabled="auth.loading">
            {{ auth.loading ? 'Вход...' : 'Войти' }}
        </Button>

        <p v-if="auth.error" class="error">{{ auth.error }}</p>
    </Form>
</template>

<style scoped>
</style>