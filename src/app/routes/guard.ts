import { useAuthStore } from '@/features/auth/model/auth.store';
import { ROUTES } from '@/shared/routes';
import type { Router } from 'vue-router';

export const setupRouterGuard = (router: Router) => {
  router.beforeEach((to, _from, next) => {
    const authStore = useAuthStore();

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !authStore.isAuth) {
      next(ROUTES.LOGIN.PATH);
    }

    if (!requiresAuth && authStore.isAuth) {
      next(ROUTES.HOME.PATH);
    }

    next();
  });
};