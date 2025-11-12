<script setup lang="ts">
import { ref, watch } from 'vue';
import { Input, Button, Label, Form, FormField } from "@/shared/ui";
import type { UserUpdateDTO } from '@/entities/user/model';

const props = defineProps<{
    user: Partial<UserUpdateDTO> | null
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
            <Input v-model="form.name" id="name" type="text" required />
        </FormField>

        <FormField>
            <Label for="email">Email:</Label>
            <Input v-model="form.email" id="email" type="email" required />
        </FormField>

        <Button type="submit">Сохранить</Button>
    </Form>
</template>

<style scoped></style>