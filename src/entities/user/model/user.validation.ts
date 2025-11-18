import * as yup from 'yup';

export const userUpdateSchema = yup.object().shape({
    name: yup
        .string()
        .required("Имя обязательно")
        .min(2, "Имя должно содержать минимум 2 символа"),

    email: yup
        .string()
        .required("Email обязателен")
        .email("Некорректный email"),
});
