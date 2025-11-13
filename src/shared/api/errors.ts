import axios from 'axios';
interface ApiErrorResponse {
    message: string
    errors?: Record<string, string[]>
}

export const extractApiError = (error: unknown): ApiErrorResponse => {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
        const data: Partial<ApiErrorResponse> = error.response?.data ?? {};
        return {
            message: data.message || 'Ошибка сети',
            errors: data.errors || {},
        };
    }
    return { message: 'Неизвестная ошибка', errors: {} };
};