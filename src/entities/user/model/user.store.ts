import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from './user.interface';

export const useUserStore = defineStore('user', () => {
  const items = ref<User[]>([]);
  const item = ref<User | null>(null);

  const loading = ref(false);
  const error = ref<string | null>(null);
  const errors = ref<Record<string, string[]> | null>(null);

  return {
    items,
    item,
    loading,
    error,
    errors,
  };
});
