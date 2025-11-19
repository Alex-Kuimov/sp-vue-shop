<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { UserUpdateForm } from '@/features/user';
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';
import { notification } from '@/shared/lib';
import { userUpdateSchema } from '@/entities/user/model';
import { useYupValidation } from '@/shared/lib/';
import type { UserUpdateDTO } from '@/entities/user/model';

const { t } = useI18n();
const { clientErrors, validate } = useYupValidation(userUpdateSchema(t));
const route = useRoute();
const userStore = useUserStore();

const user = ref<UserUpdateDTO | null>(null);

const userID = computed(() => Number(route.params.id));
const validationErrors = computed(() => userStore.errorMessages ?? clientErrors.value);

const handleEdit = async (data: UserUpdateDTO) => {
    userStore.errorMessages = null;
    clientErrors.value = null;

    if (!(await validate(data))) {
        return false
    };

    try {
        await userService.updateItem(userID.value, data);
        notification.success(t('user.edit.success'));
    } catch (err) {
        console.error('Ошибка обновления пользователя', err);
        notification.error(t('user.edit.errors.update'));
    }
}

onMounted(async () => {
    try {
        const item = await userService.getItem(userID.value);
        user.value = { name: item.name, email: item.email };
    } catch (err) {
        console.error('Ошибка загрузки пользователя', err);
        notification.error(t('user.edit.errors.load'));
    }
});
</script>

<template>
    <n-h1>{{ t('user.edit.page_title') }}</n-h1>
    <UserUpdateForm :user="user" :validationErrors="validationErrors" :loading="userStore.loading"
        @submit="handleEdit" />
</template>
