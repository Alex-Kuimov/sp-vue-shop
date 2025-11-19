<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { ErrorMessage } from "@/shared/ui";
import type { UserUpdateDTO } from '@/entities/user/model';

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

const sendData = ref<boolean>(false);

watch(() => user, (data) => {
    if (data) {
        form.value.name = data.name ?? '';
        form.value.email = data.email ?? '';
    }
}, { immediate: true });


watch(() => loading, (newValue) => {
    if (!newValue) sendData.value = false;
});

const handleSubmit = async () => {
    if (loading) {
        return
    };

    emit('submit', form.value);
    sendData.value = true;
}
</script>

<template>
    <NForm class="form" @submit.prevent="handleSubmit">
        <NFormItem :label="t('user.update.form.name')" path="name">
            <NInput v-model:value="form.name" id="name" type="text" :class="{ err: validationErrors?.name }"
                :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.name?.[0] || null" />
        </NFormItem>

        <NFormItem :label="t('user.update.form.email')" path="email">
            <NInput v-model:value="form.email" id="email" type="email" :class="{ err: validationErrors?.email }"
                :disabled="loading" placeholder="" required />
            <ErrorMessage :error="validationErrors?.email?.[0] || null" />
        </NFormItem>

        <NButton attr-type="submit" type="primary" :disabled="loading">
            {{ sendData ? t('user.update.form.sending') : t('buttons.save') }}
        </NButton>
    </NForm>
</template>

<style scoped>
.err {
    border: 1px solid red;
}
</style>
