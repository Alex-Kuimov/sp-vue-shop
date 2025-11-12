<script setup lang="ts">
import { ref } from 'vue';
import { Input, Button, Label, Form, FormField, Select } from "@/shared/ui";
import type { UserCreateDTO } from '@/entities/user/model/';
import { userRoleOptions } from '@/shared/consts';

const emit = defineEmits<{
    (e: 'submit', data: UserCreateDTO): void
}>()

const form = ref<UserCreateDTO>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
});

const handleSubmit = () => {
    emit('submit', form.value)
}
</script>

<template>
    <Form @submit.prevent="handleSubmit">
        <FormField>
            <Label for="name">Имя:</Label>
            <Input v-model="form.name" id="name" type="text" required />
        </FormField>

        <FormField>
            <Label for="email">Email:</Label>
            <Input v-model="form.email" id="email" type="email" required />
        </FormField>

        <FormField>
            <Label for="password">Пароль:</Label>
            <Input v-model="form.password" id="password" type="password" required />
        </FormField>

        <FormField>
            <Label for="password_confirmation">Подтверждение пароля:</Label>
            <Input v-model="form.password_confirmation" id="password_confirmation" type="password" required />
        </FormField>

        <FormField>
            <Select v-model="form.role" :options="userRoleOptions" label="Роль:" required />
        </FormField>

        <Button type="submit">Создать</Button>
    </Form>
</template>

<style scoped>
.user-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 400px;
}
</style>