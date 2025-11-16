import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../model/auth.store';
import { authService } from '../model/auth.service';
import { ROUTES } from '@/shared/routes';
import { notification } from '@/shared/lib';
import { emailRule, passwordRule } from '../lib/validation';
import type { LoginForm } from '../model/auth.interface';
import type { FormInst } from 'naive-ui';

export function useLoginForm() {
    const authStore = useAuthStore();
    const router = useRouter();

    const formRef = ref<FormInst | null>(null);

    const form = ref<LoginForm>({
        email: '',
        password: '',
    });

    const rules = {
        email: emailRule,
        password: passwordRule,
    };

    const authenticate = async () => {
        try {
            const success = await authService.login(form.value);

            if (success) {
                notification.success('Вход выполнен успешно');
                router.push(ROUTES.HOME.PATH);
            }
        } catch {
            notification.error(`Ошибка входа: ${authStore.errorMessage}`);
        }
    };

    const login = async () => {
        if (!formRef.value) {
            return;
        }

        const isValid = await formRef.value.validate();

        if (isValid) {
            authenticate();
        }
    };

    return {
        authStore,
        form,
        rules,
        formRef,
        login,
    };
}