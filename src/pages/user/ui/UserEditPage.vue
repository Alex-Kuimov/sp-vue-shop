<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { UserUpdateForm } from '@/entities/user/ui'
import { useUserStore } from '@/entities/user/model'
import type { UserUpdateDTO } from '@/entities/user/model'

const route = useRoute()
const userStore = useUserStore()

const user = ref<Partial<UserUpdateDTO> | undefined>(undefined)
const loading = ref(true)
const error = ref<string | null>(null)

// Обновление пользователя
const handleEdit = async (data: UserUpdateDTO) => {
    try {
        const id = Number(route.params.id);
        await userStore.updateItem(id, data);

    } catch (err) {
        error.value = 'Ошибка при обновлении пользователя'
    }
}

// Получаем данные пользователя
onMounted(async () => {
    try {
        const id = Number(route.params.id);
        const item = await userStore.getItem(id);

        user.value = {
            name: item.name,
            email: item.email
        }
    } catch (err) {
        error.value = 'Ошибка при загрузке пользователя'
    } finally {
        loading.value = false
    }
})
</script>

<template>
    <section>
        <h1>Редактировать пользователя</h1>

        <p v-if="loading">Загрузка...</p>
        <p v-else-if="error">{{ error }}</p>

        <UserUpdateForm v-else :user="user" @submit="handleEdit" />
    </section>
</template>
