<script setup lang="ts">
import { ref, watch } from 'vue';
import { Input, Button, Label, Form, FormField, ErrorMessage } from "@/shared/ui";
import type { UserUpdateDTO } from '@/entities/user/model';

const props = defineProps<{
    user: Partial<UserUpdateDTO> | null,
    errors: Record<string, string[]> | null
}>();

const emit = defineEmits<{
    (e: 'submit', data: UserUpdateDTO): void
}>();

const form = ref<UserUpdateDTO>({
    name: '',
    email: ''
});

watch(() => props.user, (data) => {
    if (data) {
        form.value.name = data.name ?? ''
        form.value.email = data.email ?? ''
    }
}, { immediate: true })

const handleSubmit = () => {
    emit('submit', form.value);
}
</script>

<template>
    <Form @submit.prevent="handleSubmit">
        <FormField>
            <Label for="name">Имя:</Label>
            <Input v-model="form.name" id="name" type="text" :class="props.errors?.name ? 'err' : ''" required />
            <ErrorMessage :error="props.errors?.name" />
        </FormField>

        <FormField>
            <Label for="email">Email:</Label>
            <Input v-model="form.email" id="email" type="email" :class="props.errors?.email ? 'err' : ''" required />
            <ErrorMessage :error="props.errors?.email" />
        </FormField>

        <Button type="submit">Сохранить</Button>
    </Form>
</template>

<style scoped>
.err {
    border: 1px solid red;
}
</style>