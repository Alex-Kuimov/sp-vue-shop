<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { UserUpdateForm } from '@/features/user';
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';
import { Loader } from '@/shared/ui';
import { notification } from '@/shared/lib';
import type { UserUpdateDTO } from '@/entities/user/model';

const { t } = useI18n();

const route = useRoute()
const userStore = useUserStore()

const user = ref<UserUpdateDTO | null>(null)

const handleEdit = async (data: UserUpdateDTO) => {
    const id = Number(route.params.id);
    try {
        await userService.updateItem(id, data);
        notification.success(t('user.edit.success'));
    } catch (err) {
        console.error('Ошибка обновления пользователя', err);
        notification.error(t('user.edit.errors.update'));
    }
}

onMounted(async () => {
    const id = Number(route.params.id);
    try {
        const item = await userService.getItem(id);
        user.value = { name: item.name, email: item.email };
    } catch (err) {
        console.error('Ошибка загрузки пользователя', err);
        notification.error(t('user.edit.errors.load'));
    }
});
</script>

<template>
    <n-h1>{{ t('user.edit.page_title') }}</n-h1>
    <UserUpdateForm :user="user" :validationErrors="userStore.validationErrors" :loading="userStore.loading" @submit="handleEdit" />
    <Loader v-if="userStore.loading" />
</template>
