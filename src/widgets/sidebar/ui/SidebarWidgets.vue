<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ROUTES } from '@/shared/routes';
</script>
<template>
    <aside class="sidebar">
        <n-ul>
            <n-li>
                <RouterLink :to="ROUTES.HOME.PATH" #="{ navigate, href }" custom>
                    <n-a :href="href" @click="navigate">
                        Главная
                    </n-a>
                </RouterLink>
            </n-li>
            <n-li>
                <RouterLink :to="{ name: ROUTES.USERS.NAME, params: { page: 1 } }" #="{ navigate, href }" custom>
                    <n-a :href="href" @click="navigate">
                        Пользователи
                    </n-a>
                </RouterLink>
            </n-li>
        </n-ul>
    </aside>
</template>

<style scoped>
.sidebar {
    width: 200px;
    height: 100vh;
    background-color: #fafafc;
    padding: 10px;
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