<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { ErrorMessage } from "@/shared/ui";
import { useYupValidation } from '@/shared/lib/';
import type { UserUpdateDTO } from '@/entities/user/model';
import { userUpdateSchema } from '@/entities/user/model';

const { t } = useI18n();

const { user, validationErrors, loading } = defineProps<{
    user: Partial<UserUpdateDTO> | null,
    validationErrors: Record<string, string[]> | null,
    loading?: boolean,
}>();

const emit = defineEmits<{
    (e: 'submit', data: UserUpdateDTO): void
}>();

const form = ref<UserUpdateDTO>({
    name: '',
    email: ''
});

const { clientErrors, validate } = useYupValidation(userUpdateSchema(t), form);

const loadData = ref<boolean>(false);

watch(() => user, (data) => {
    if (data) {
        form.value.name = data.name ?? '';
        form.value.email = data.email ?? '';
    }
}, { immediate: true });


watch(() => loading, (newValue) => {
    if (!newValue) loadData.value = false;
});

const handleSubmit = async () => {
    if (loading) {
        return
    };

    const valid = await validate();

    if (!valid) {
        return
    };

    emit('submit', form.value);
    loadData.value = true;
}
</script>

<template>
    <NForm class="form" @submit.prevent="handleSubmit">
        <NFormItem :label="t('user.update.form.name')" path="name">
            <NInput v-model:value="form.name" id="name" type="text"
                :class="{ err: clientErrors.name || validationErrors?.name }" :disabled="loading" placeholder=""
                required />
            <ErrorMessage :error="clientErrors.name?.[0] || validationErrors?.name?.[0] || null" />
        </NFormItem>

        <NFormItem :label="t('user.update.form.email')" path="email">
            <NInput v-model:value="form.email" id="email" type="email"
                :class="{ err: clientErrors.email || validationErrors?.email }" :disabled="loading" placeholder=""
                required />
            <ErrorMessage :error="clientErrors.email?.[0] || validationErrors?.email?.[0] || null" />
        </NFormItem>

        <NButton attr-type="submit" type="primary" :disabled="loading">
            {{ loadData ? t('user.update.form.loading') : t('buttons.save') }}
        </NButton>
    </NForm>
</template>

<style scoped>
.err {
    border: 1px solid red;
}
</style>
