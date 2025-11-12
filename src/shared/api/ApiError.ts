export class ApiError extends Error {
    status?: number;
    data?: unknown;
    errors?: Record<string, string[]>;

    constructor(message: string, status?: number, data?: any) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;

        // Если это Laravel-валидация — добавим поле validationErrors
        if (data && typeof data === 'object' && data.errors) {
            this.errors = data.errors;
        }
    }
}