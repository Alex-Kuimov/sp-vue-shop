import type { FormItemRule } from 'naive-ui';

export const emailRule: FormItemRule = {
    required: true,
    trigger: ['blur'],
    validator: (_, value: string) => {
        const v = (value ?? '').trim();

        if (!v) {
            return Promise.reject('Введите email');
        }

        const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

        if (!re.test(v)) {
            return Promise.reject('Некорректный email');
        }

        return Promise.resolve();
    },
};

export const passwordRule: FormItemRule = {
    required: true,
    trigger: ['blur'],
    validator: (_, value: string) => {
        const v = (value ?? '').trim();

        if (!v) {
            return Promise.reject('Введите пароль');
        }
        if (v.length < 8) {
            return Promise.reject('Пароль должен быть от 8 символов');
        }

        return Promise.resolve();
    },
};