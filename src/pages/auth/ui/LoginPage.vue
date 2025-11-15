<script setup lang="ts">
import { LoginForm } from '@/features/auth';
</script>

<template>
  <div class="auth-page">
    <n-h1>Вход в систему</n-h1>
    <LoginForm />
  </div>
</template>

<style scoped>
.auth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>