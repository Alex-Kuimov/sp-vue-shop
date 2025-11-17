<script setup lang="ts">
import { watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';
import { UserCreateBtn, UserPagination, UserSearch } from '@/features/user';
import { UserListWidget } from '@/widgets/user';
import { ROUTES } from '@/shared/routes';

const { t } = useI18n();
const router = useRouter();
const userStore = useUserStore();

// Получаем текущую страницу из URL
const { page } = defineProps<{ page: number }>();

userStore.currentPage = page;

const handlePageChange = (page: number) => {
    userStore.currentPage = page;
};

watch(() => userStore.currentPage, (page) => {
    userService.getItems(page);
    router.replace({
        name: ROUTES.USERS.NAME,
        params: { page },
    });
});

onMounted(() => {
    userService.getItems(userStore.currentPage);
});
</script>

<template>
    <n-h1>{{ t('pages.user.list') }}</n-h1>

    <UserCreateBtn />
    <UserSearch />

    <UserListWidget :users="userStore.items" />

    <UserPagination v-model:page="userStore.currentPage" :total-pages="userStore.totalPages"
        @update:page="handlePageChange" />
</template>