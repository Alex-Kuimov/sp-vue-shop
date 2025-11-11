<script setup lang="ts">
import { HeaderWidgets } from '@/widgets/header';
import { SidebarWidgets } from '@/widgets/sidebar';
import { RouterView } from 'vue-router';
import { useAuthStore } from '@/features/auth/model/auth.store';

const authStore = useAuthStore();
</script>

<template>
    <header v-if="authStore.isAuth">
        <HeaderWidgets />
    </header>

    <main>
        <SidebarWidgets v-if="authStore.isAuth" />

        <div class="content">
            <RouterView />
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
}
</style>
