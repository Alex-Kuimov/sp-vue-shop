<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { UserCreateForm } from '@/features/user';
import { ROUTES } from '@/shared/routes';
import { useYupValidation } from '@/shared/lib/';
import { userCreateSchema } from '@/entities/user/model';
import type { UserCreateDTO } from '@/entities/user/model';

const { t } = useI18n();
const { clientErrors, validate } = useYupValidation(userCreateSchema(t));
const userStore = useUserStore();
const router = useRouter();

const validationErrors = computed(() => userStore.errorMessages ?? clientErrors.value);

const handleCreate = async (formData: UserCreateDTO) => {
    userStore.errorMessages = null;
    clientErrors.value = null;

    if (!(await validate(formData))) {
        return false
    };

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
    <UserCreateForm :validationErrors="validationErrors" :loading="userStore.loading" @submit="handleCreate" />
</template>

<style scoped></style>