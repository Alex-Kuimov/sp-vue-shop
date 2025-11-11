import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '@/shared/routes';
import { useAuthStore } from '@/features/auth/model/auth.store';

const routes = [
	{
		path: ROUTES.HOME.PATH,
		name: ROUTES.HOME.NAME,
		component: () => import('@/pages/home/ui/HomePage.vue'),
	},
	{
		path: ROUTES.LOGIN.PATH,
		name: ROUTES.LOGIN.NAME,
		component: () => import('@/pages/auth/ui/LoginPage.vue'),
	},
	{
		path: ROUTES.USERS.PATH,
		name: ROUTES.USERS.NAME,
		component: () => import('@/pages/user/ui/UserListPage.vue'),
	},
	{
		path: ROUTES.USER_CREATE.PATH,
		name: ROUTES.USER_CREATE.NAME,
		component: () => import('@/pages/user/ui/UserCreatePage.vue'),
	},
	{
		path: ROUTES.USER_EDIT.PATH,
		name: ROUTES.USER_EDIT.NAME,
		component: () => import('@/pages/user/ui/UserEditPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, _from, next) => {
	const authStore = useAuthStore();

	if (to.name === ROUTES.LOGIN.NAME && authStore.isAuth) {
		next(ROUTES.HOME.PATH);
	}

	if ((to.name === ROUTES.HOME.NAME ||
		to.name === ROUTES.USERS.NAME ||
		to.name === ROUTES.USER_CREATE.NAME ||
		to.name === ROUTES.USER_EDIT.NAME) &&
		!authStore.isAuth) {
		next(ROUTES.LOGIN.PATH);
	}

	next();
});

export default router;