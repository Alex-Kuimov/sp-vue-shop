<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { LoginForm } from '@/features/auth';

const { t } = useI18n();
</script>

<template>
  <div class="auth-page">
    <n-h1>{{ t('auth.login.page_title') }}</n-h1>
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