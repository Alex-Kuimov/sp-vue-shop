import axios from 'axios';
interface ApiErrorResponse {
    message: string
    errors?: Record<string, string[]>
}

export const extractApiError = (error: unknown): ApiErrorResponse => {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
        return {
            message: error.response?.data?.message ?? 'Network error',
            errors: error.response?.data?.errors,
        }
    }
    return { message: 'Unexpected error', errors: undefined }
}