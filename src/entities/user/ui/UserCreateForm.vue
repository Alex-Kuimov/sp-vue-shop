<script setup lang="ts">
import { ref } from 'vue';
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
    <n-form class="form">
        <n-form-item label="Имя:" path="name">
            <n-input v-model:value="form.name" id="name" type="text" placeholder="" required />
        </n-form-item>

        <n-form-item label="Email:" path="email">
            <n-input v-model:value="form.email" id="email" type="email" placeholder="" required />
        </n-form-item>

        <n-form-item label="Пароль:" path="email">
            <n-input v-model:value="form.password" id="password" type="password" placeholder="" required />
        </n-form-item>

        <n-form-item label="Подтверждение пароля:" path="email">
            <n-input v-model:value="form.password_confirmation" id="password_confirmation" type="password"
                placeholder="" required />
        </n-form-item>

        <n-form-item label="Роль:" path="role">
            <n-select v-model:value="form.role" :options="userRoleOptions" />
        </n-form-item>

        <n-button type="primary" @click="handleSubmit">
            Создать
        </n-button>
    </n-form>
</template>

<style scoped>
</style>