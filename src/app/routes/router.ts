import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '@/shared/routes';

const routes = [
	{
		path: ROUTES.HOME.PATH,
		name: ROUTES.HOME.NAME,
		component: () => import('@/pages/home/ui/HomePage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;