<script setup lang="ts">
import { ref, computed } from 'vue';
import type { UserCreateDTO } from '@/entities/user/model/';
import { ErrorMessage } from "@/shared/ui";
import { userRoleOptions } from '@/shared/consts';

const props = defineProps<{
    validationErrors: Record<string, string[]> | null,
    loading?: boolean,
}>();

const emit = defineEmits<{
    (e: 'submit', data: UserCreateDTO): void
}>()

const form = ref<UserCreateDTO>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
});

const errors = computed(() => ({
    name: props.validationErrors?.name?.[0] ?? null,
    email: props.validationErrors?.email?.[0] ?? null,
    password: props.validationErrors?.password?.[0] ?? null,
    password_confirmation: props.validationErrors?.password_confirmation?.[0] ?? null,
    role: props.validationErrors?.role?.[0] ?? null,
}));

const handleSubmit = () => {
    emit('submit', form.value)
}
</script>

<template>
    <n-form class="form">
        <n-form-item label="Имя:" path="name">
            <n-input v-model:value="form.name" id="name" type="text" :class="{ err: errors.name }"
                :disabled="props.loading" placeholder="" required />
            <ErrorMessage :error="errors.name" />
        </n-form-item>

        <n-form-item label="Email:" path="email">
            <n-input v-model:value="form.email" id="email" type="email" :class="{ err: errors.email }"
                :disabled="props.loading" placeholder="" required />
            <ErrorMessage :error="errors.email" />
        </n-form-item>

        <n-form-item label="Пароль:" path="email">
            <n-input v-model:value="form.password" id="password" type="password" :class="{ err: errors.password }"
                :disabled="props.loading" placeholder="" required />
            <ErrorMessage :error="errors.password" />
        </n-form-item>

        <n-form-item label="Подтверждение пароля:" path="email">
            <n-input v-model:value="form.password_confirmation" id="password_confirmation" type="password"
                :class="{ err: errors.password_confirmation }" :disabled="props.loading" placeholder="" required />
            <ErrorMessage :error="errors.password_confirmation" />
        </n-form-item>

        <n-form-item label="Роль:" path="role">
            <n-select v-model:value="form.role" :options="userRoleOptions" :class="{ err: errors.role }"
                :disabled="props.loading" />
            <ErrorMessage :error="errors.role" />
        </n-form-item>

        <n-button type="primary" :disabled="props.loading" @click="handleSubmit">
            {{ props.loading ? 'Создаю...' : 'Создать' }}
        </n-button>
    </n-form>
</template>

<style scoped></style>