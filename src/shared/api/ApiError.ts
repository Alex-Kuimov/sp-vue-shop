export class ApiError extends Error {
    status?: number;
    data?: unknown;

    constructor(message: string, status?: number, data?: unknown) {
        super(message);
        this.name = 'Ошибка';
        this.status = status;
        this.data = data;
    }
}