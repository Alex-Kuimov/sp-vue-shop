<script setup lang="ts">
import { HeaderWidgets } from '@/widgets/header';
import { SidebarWidgets } from '@/widgets/sidebar';
import { RouterView } from 'vue-router';
</script>

<template>
    <header>
        <HeaderWidgets />
    </header>

    <main>
        <SidebarWidgets />

        <div class="content">
            <RouterView />
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
}

.content {
    width: 100%;
    padding: 10px;
}
</style>
