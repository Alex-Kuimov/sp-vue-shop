<script setup>
import { LogoutBtn } from '@/features/auth';
</script>
<template>
    <header class="header">
        <div class="header-left">
            <p>Dashboard</p>
        </div>
        <div class="header-right">
            <LogoutBtn>Выход</LogoutBtn>
        </div>
    </header>
</template>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #efeff5;
}

.header-left {
    flex: 1;
}

.header-right {
    flex: 0 0 auto;
}
</style>