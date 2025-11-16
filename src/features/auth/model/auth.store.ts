import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const loading = ref<boolean>(false);
    const token = ref<string | null>(localStorage.getItem('authToken'));
    const errorMessage = ref<string | null>(null);
    const isAuth = computed(() => !!token.value);

    return { token, isAuth, loading, errorMessage };
});