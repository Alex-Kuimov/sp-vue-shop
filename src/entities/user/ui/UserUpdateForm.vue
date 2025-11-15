<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { Label, Form, FormField, ErrorMessage } from "@/shared/ui";
import type { UserUpdateDTO } from '@/entities/user/model';

const props = defineProps<{
    user: Partial<UserUpdateDTO> | null,
    errors: Record<string, string[]> | null,
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
    name: props.errors?.name?.[0] ?? null,
    email: props.errors?.email?.[0] ?? null
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
    <Form>
        <FormField>
            <Label for="name">Имя:</Label>
            <n-input v-model:value="form.name" id="name" type="text" :class="{ err: errors.name }"
                :disabled="props.loading" :loading="props.loading" required />
            <ErrorMessage :error="errors.name" />
        </FormField>

        <FormField>
            <Label for="email">Email:</Label>
            <n-input v-model:value="form.email" id="email" type="email" :class="{ err: errors.email }"
                :disabled="props.loading" :loading="props.loading" required />
            <ErrorMessage :error="errors.email" />
        </FormField>

        <n-button type="primary" :disabled="props.loading" @click="handleSubmit">
            {{ loadData ? 'Сохранение...' : 'Сохранить' }}
        </n-button>
    </Form>
</template>

<style scoped>
.err {
    border: 1px solid red;
}
</style>