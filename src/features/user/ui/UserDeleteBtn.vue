<script setup lang="ts">
import { notification } from '@/shared/lib';
import { userService } from '@/features/user/model';
import { useUserStore } from '@/entities/user/model';

const userStore = useUserStore();

const props = defineProps<{ id: number }>();

const onClick = async () => {
    await userService.deleteItem(props.id);

    userStore.currentPage = 1;
    await userService.getItems(userStore.currentPage);

    notification.success('Пользователь успешно удален');
}
</script>

<template>
    <n-popconfirm @positive-click="onClick" negative-text="Нет" positive-text="Да, уверен">
        <template #trigger>
            <n-button strong secondary type="error">Удалить</n-button>
        </template>
        Вы уверены, что хотите удалить пользователя?
    </n-popconfirm>
</template>

<style scoped>
.n-button {
    margin-left: 10px;
}
</style>