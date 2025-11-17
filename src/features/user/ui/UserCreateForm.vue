<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { UserCreateDTO } from '@/entities/user/model/';
import { ErrorMessage } from "@/shared/ui";
import { userRoleOptions } from '@/shared/consts';

const { t } = useI18n();

defineProps<{
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

const handleSubmit = () => {
    emit('submit', form.value)
}
</script>

<template>
    <n-form class="form" @submit.prevent="handleSubmit">
        <n-form-item :label="t('user.create.form.name')" path="name">
            <n-input v-model:value="form.name" id="name" type="text" :class="{ err: validationErrors?.name }"
                :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.name?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('user.create.form.email')" path="email">
            <n-input v-model:value="form.email" id="email" type="email" :class="{ err: validationErrors?.email }"
                :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.email?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('user.create.form.password')" path="password">
            <n-input v-model:value="form.password" id="password" type="password"
                :class="{ err: validationErrors?.password }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.password?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('user.create.form.password_confirmation')" path="password_confirmation">
            <n-input v-model:value="form.password_confirmation" id="password_confirmation" type="password"
                :class="{ err: validationErrors?.password_confirmation }" :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.password_confirmation?.[0] || null" />
        </n-form-item>

        <n-form-item :label="t('user.create.form.role')" path="role">
            <n-select v-model:value="form.role" :options="userRoleOptions" :class="{ err: validationErrors?.role }"
                :disabled="loading" />
            <ErrorMessage :error="validationErrors?.role?.[0] || null" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :disabled="loading">
            {{ loading ? t('user.create.form.loading') : t('user.create.form.submit') }}
        </n-button>
    </n-form>
</template>

<style scoped></style>