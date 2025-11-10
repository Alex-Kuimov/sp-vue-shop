<script setup lang="ts">
import { ref } from 'vue';
import { Input, Button } from "@/shared/ui";
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
    <form @submit.prevent="handleSubmit" class="form">
        <div class="field">
            <label for="email">Email:</label>
            <Input id="email" v-model="form.email" type="email" placeholder="Введите email" required />
        </div>

        <div class="field">
            <label for="password">Пароль:</label>
            <Input id="password" v-model="form.password" type="password" placeholder="Введите пароль" required />
        </div>

        <Button type="submit" :disabled="auth.loading">
            {{ auth.loading ? 'Вход...' : 'Войти' }}
        </Button>

        <p v-if="auth.error" class="error">{{ auth.error }}</p>
    </form>
</template>

<style scoped>
.form {
    max-width: 320px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: #fff;
}

.title {
    text-align: center;
    margin-bottom: 0.5rem;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

input {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
}

button {
    padding: 0.5rem;
    border: none;
    border-radius: 6px;
    background: #3b82f6;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
}

button:hover:not(:disabled) {
    background: #2563eb;
}

button:disabled {
    background: #9ca3af;
    cursor: not-allowed;
}

.error {
    color: #dc2626;
    text-align: center;
}
</style>