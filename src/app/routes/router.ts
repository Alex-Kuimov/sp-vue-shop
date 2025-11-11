import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { ROUTES } from '@/shared/routes';
import { useAuthStore } from '@/features/auth/model/auth.store';

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
				path: ROUTES.USERS.PATH,
				component: () => import('@/pages/user/ui/UserListPage.vue')
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

// Навигационный guard с использованием meta.requiresAuth
router.beforeEach((to, _from, next) => {
	const authStore = useAuthStore();

	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if (requiresAuth && !authStore.isAuth) {
		next(ROUTES.LOGIN.PATH);
	}

	if (!requiresAuth  && authStore.isAuth) {
		next(ROUTES.HOME.PATH);
	}

	next();
});

export default router;