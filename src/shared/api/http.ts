import axios from 'axios';
import { ApiError } from './ApiError';
import { config } from '@/shared/config/';

export const http = axios.create({
    baseURL: config.API_BASE_URL,
    withCredentials: true,
});

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

http.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // Сервер ответил с ошибкой
            throw new ApiError(
                error.response.data?.message || 'Ошибка запроса',
                error.response.status,
                error.response.data
            );
        } else if (error.request) {
            // Нет ответа от сервера
            throw new ApiError('Сервер не отвечает');
        } else {
            // Ошибка при настройке запроса
            throw new ApiError(error.message);
        }
    }
);
