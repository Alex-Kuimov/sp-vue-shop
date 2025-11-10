import axios from 'axios';
import { API_BASE_URL } from '@/shared/config';

export const http = axios.create({
    baseURL: API_BASE_URL,
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