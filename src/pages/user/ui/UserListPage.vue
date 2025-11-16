<script setup lang="ts">
import { watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/entities/user/model';
import { userService } from '@/features/user/model';
import { UserCreateBtn, UserPagination, UserSearch } from '@/features/user';
import { UserListWidget } from '@/widgets/user';
import { ROUTES } from '@/shared/routes';

// Props из маршрута
const props = defineProps<{ page: number }>();

const router = useRouter();
const userStore = useUserStore();

// Инициализируем currentPage из props
userStore.currentPage = props.page;

// Первая загрузка пользователей
onMounted(() => {
    userService.getItems(userStore.currentPage);
});

// Обработчик смены страницы
const handlePageChange = (page: number) => {
    userStore.currentPage = page;
};

// Следим за currentPage, обновляем данные и URL
watch(() => userStore.currentPage, (page) => {
    userService.getItems(page);
    router.replace({
        name: ROUTES.USERS.NAME,
        params: { page },
    });
});
</script>

<template>
    <n-h1>Список пользователей</n-h1>

    <UserCreateBtn />
    <UserSearch />

    <UserListWidget :users="userStore.items" />

    <UserPagination v-model:page="userStore.currentPage" :total-pages="userStore.totalPages"
        @update:page="handlePageChange" />
</template>