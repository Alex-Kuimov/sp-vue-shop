<script setup lang="ts">
import { UserCard } from '@/entities/user/ui'
import type { User } from '@/entities/user/model'

const { users } = defineProps<{ users: User[] | null }>();

</script>
<template>
    <p>Я виджет списка пользователей</p>

    <UserCard v-for="user in users" v-bind="user" />
</template>
<style scoped></style>