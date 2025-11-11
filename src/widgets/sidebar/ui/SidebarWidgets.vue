<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ROUTES } from '@/shared/routes';
</script>
<template>
    <aside class="sidebar">
        <nav>
            <ul>
                <li>
                    <RouterLink :to="ROUTES.HOME.PATH">Главная</RouterLink>
                </li>
                <li>
                    <RouterLink :to="ROUTES.USERS.PATH">Пользователи</RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>
.sidebar {
    width: 200px;
    height: 100vh;
    background-color: #f5f5f5;
}
.sidebar nav {
    padding: 1rem;
}
.sidebar ul {
    list-style: none;
    padding: 0;
}
.sidebar li {
    margin-bottom: 1rem;
}
</style>