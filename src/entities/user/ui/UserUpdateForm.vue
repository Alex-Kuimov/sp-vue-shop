<script setup lang="ts">
import { ref, watch } from 'vue'
import type { UserUpdateDTO } from '@/entities/user/model'

// Пропсы: частично заполненные данные пользователя
const props = defineProps<{
    user?: Partial<UserUpdateDTO>
}>()

const emit = defineEmits<{
    (e: 'submit', data: UserUpdateDTO): void
}>()

// Локальное состояние формы
const form = ref<UserUpdateDTO>({
    name: '',
    email: ''
})

// Следим за изменением initialData
watch(
    () => props.user,
    (data) => {
        if (data) {
            form.value.name = data.name ?? ''
            form.value.email = data.email ?? ''
        }
    },
    { immediate: true }
)

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

        <button type="submit">Сохранить</button>
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