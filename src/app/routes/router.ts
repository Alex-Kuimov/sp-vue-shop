import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { ROUTES } from '@/shared/routes';

// Определяем маршруты с использованием layout-компонентов и meta-информацией
const routes: RouteRecordRaw[] = [
	{
		path: ROUTES.LOGIN.PATH,
		component: () => import('@/app/layout/AuthLayout.vue'),
		meta: {
			requiresAuth: false
		},
		children: [
			{
				path: ROUTES.LOGIN.PATH,
				name: ROUTES.LOGIN.NAME,
				component: () => import('@/pages/auth/ui/LoginPage.vue'),
			}
		]
	},
	{
		path: ROUTES.HOME.PATH,
		component: () => import('@/app/layout/MainLayout.vue'),
		meta: {
			requiresAuth: true
		},
		children: [
			{
				name: ROUTES.HOME.NAME,
				path: ROUTES.HOME.PATH,
				component: () => import('@/pages/home/ui/HomePage.vue')
			},
			{
				name: ROUTES.USERS.NAME,
				path: `${ROUTES.USERS.PATH}/page/:page?`,
				component: () => import('@/pages/user/ui/UserListPage.vue'),
				props: (route) => ({ page: Number(route.params.page) || 1 })
			},
			{
				name: ROUTES.USER_CREATE.NAME,
				path: ROUTES.USER_CREATE.PATH,
				component: () => import('@/pages/user/ui/UserCreatePage.vue')
			},
			{
				name: ROUTES.USER_EDIT.NAME,
				path: ROUTES.USER_EDIT.PATH,
				component: () => import('@/pages/user/ui/UserEditPage.vue')
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;