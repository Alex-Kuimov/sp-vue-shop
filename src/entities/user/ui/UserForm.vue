<script setup lang="ts">
import { ref } from 'vue';
import type { UserCreateDTO } from '@/entities/user/model/user.interface';

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
    <form @submit.prevent="handleSubmit" class="user-form">
        <label>
            Имя:
            <input v-model="form.name" type="text" required />
        </label>

        <label>
            Email:
            <input v-model="form.email" type="email" required />
        </label>

        <label>
            Пароль:
            <input v-model="form.password" type="password" required />
        </label>

        <label>
            Подтверждение пароля:
            <input v-model="form.password_confirmation" type="password" required />
        </label>

        <label>
            Роль:
            <select v-model="form.role" required>
                <option value="">Выберите роль</option>
                <option value="admin">Админ</option>
                <option value="user">Пользователь</option>
            </select>
        </label>

        <button type="submit">Создать</button>
    </form>
</template>

<style scoped>
.user-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 400px;
}
</style>