<script setup lang="ts">
import { notification } from '@/shared/lib';
import { useI18n } from 'vue-i18n';
import { userService } from '@/features/user/model';
import { useUserStore } from '@/entities/user/model';
import { UserCard } from '@/entities/user/ui'
import type { User } from '@/entities/user/model'

const { t } = useI18n();

const userStore = useUserStore();

const { users } = defineProps<{ users: User[] | null }>();

const deleteUser = async (id: number) => {
    await userService.deleteItem(id);

    userStore.currentPage = 1;
    await userService.getItems(userStore.currentPage);

    notification.success(t('user.delete.success'));
}

</script>
<template>
    <n-table :bordered="false" :single-line="false">
        <thead>
            <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>E-mail</th>
                <th>Роль</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <UserCard v-for="user in users" v-bind="user" @delete="deleteUser" />
        </tbody>
    </n-table>
</template>
<style scoped></style>