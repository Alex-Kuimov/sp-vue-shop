import { ref } from 'vue';
import type { Ref } from 'vue';
import type { AnyObjectSchema } from 'yup';
import { ValidationError } from 'yup';

export function useYupValidation<T extends Record<string, any>>(
    schema: AnyObjectSchema,
    form: Ref<T>
) {
    const clientErrors = ref<Record<string, string[]>>({});

    const validate = async () => {
        try {
            await schema.validate(form.value, { abortEarly: false });
            clientErrors.value = {};
            return true;
        } catch (err: any) {
            if (err instanceof ValidationError) {
                const formatted: Record<string, string[]> = {};

                err.inner.forEach(issue => {
                    const key = issue.path as string;
                    if (!formatted[key]) formatted[key] = [];
                    formatted[key].push(issue.message);
                });

                clientErrors.value = formatted;
            }

            return false;
        }
    };

    const reset = () => {
        clientErrors.value = {};
    };

    return { clientErrors, validate, reset };
}
