<script setup lang="ts">
import { notification } from '@/shared/lib';
import { useI18n } from 'vue-i18n';
import { userService } from '@/features/user/model';
import { useUserStore } from '@/entities/user/model';

const { t } = useI18n();

const userStore = useUserStore();

const { id } = defineProps<{ id: number }>();

const onClick = async () => {
    await userService.deleteItem(id);

    userStore.currentPage = 1;
    await userService.getItems(userStore.currentPage);

    notification.success(t('user.delete.success'));
}
</script>

<template>
    <n-popconfirm @positive-click="onClick" negative-text="Нет" positive-text="Да, уверен">
        <template #trigger>
            <n-button strong secondary type="error">{{ t('user.delete.button') }}</n-button>
        </template>
        {{ t('user.delete.confirm') }}
    </n-popconfirm>
</template>

<style scoped>
.n-button {
    margin-left: 10px;
}
</style>