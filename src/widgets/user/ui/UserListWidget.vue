<script setup lang="ts">
import { UserCard } from '@/entities/user/ui'
import type { User } from '@/entities/user/model'

const { users } = defineProps<{ users: User[] | null }>();
</script>
<template>
    <n-table :bordered="false" :single-line="false">
        <thead>
            <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>E-mail</th>
                <th>Роль</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <UserCard v-for="user in users" v-bind="user" />
        </tbody>
    </n-table>
</template>
<style scoped></style>