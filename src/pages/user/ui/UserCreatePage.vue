<script setup lang="ts">
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { UserCreateForm } from '@/features/user';
import { ROUTES } from '@/shared/routes';
import type { UserCreateDTO } from '@/entities/user/model'

const { t } = useI18n();

const userStore = useUserStore();
const router = useRouter();

const handleCreate = async (formData: UserCreateDTO) => {
    try {
        await userService.createItem(formData);

        userStore.currentPage = 1;
        router.push({ name: ROUTES.USERS.NAME, params: { page: userStore.currentPage } });

        await userService.getItems(userStore.currentPage);
    } catch (e) {
        console.error('Ошибка при создании пользователя', e)
    }
}
</script>

<template>
    <n-h1>{{ t('user.create.page_title') }}</n-h1>
    <UserCreateForm :validationErrors="userStore.errorMessages" :loading="userStore.loading"
        @submit="handleCreate" />
</template>

<style scoped></style>