import { ref } from 'vue';
import type { AnyObjectSchema } from 'yup';
import { ValidationError } from 'yup';

export function useYupValidation(schema: AnyObjectSchema) {
    const clientErrors = ref<Record<string, string[]> | null>(null);

    const validate = async (form: Object) => {
        try {
            await schema.validate(form, { abortEarly: false });
            clientErrors.value = null;
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

    return { clientErrors, validate };
}
