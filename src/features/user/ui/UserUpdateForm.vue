<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { ErrorMessage } from "@/shared/ui";
import type { UserUpdateDTO } from '@/entities/user/model';

const props = defineProps<{
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

const loadData = ref<boolean>(false);

const errors = computed(() => ({
    name: props.validationErrors?.name?.[0] ?? null,
    email: props.validationErrors?.email?.[0] ?? null
}));

watch(() => props.user, (data) => {
    if (data) {
        form.value.name = data.name ?? ''
        form.value.email = data.email ?? ''
    }
}, { immediate: true });

watch(() => props.loading, (newValue) => {
    if (!newValue) {
        loadData.value = false;
    }
});

const handleSubmit = () => {
    if (!props.loading) {
        emit('submit', form.value);
        loadData.value = true;
    }
}
</script>

<template>
    <n-form class="form" @submit.prevent="handleSubmit">
        <n-form-item label="Имя:" path="name">
            <n-input v-model:value="form.name" id="name" type="text" :class="{ err: errors.name }"
                :disabled="props.loading" :loading="props.loading" placeholder="" required />
            <ErrorMessage :error="errors.name" />
        </n-form-item>

        <n-form-item label="E-mail:" path="email">
            <n-input v-model:value="form.email" id="email" type="email" :class="{ err: errors.email }"
                :disabled="props.loading" :loading="props.loading" placeholder="" required />
            <ErrorMessage :error="errors.email" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :disabled="props.loading">
            {{ loadData ? 'Сохранение...' : 'Сохранить' }}
        </n-button>
    </n-form>
</template>

<style scoped>
.err {
    border: 1px solid red;
}
</style>