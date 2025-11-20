import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from './user.interface';

export const useUserStore = defineStore('user', () => {
	const items = ref<User[]>([]);
	const item = ref<User | null>(null);

	const loading = ref(false);
	const errorMessage = ref<string | null>(null);
	const errorMessages = ref<Record<string, string[]> | null>(null);

	const currentPage = ref<number>(1);
	const totalPages = ref<number>(1);

	return {
		items,
		item,
		loading,
		errorMessage,
		errorMessages,
		currentPage,
		totalPages,
	};
});
