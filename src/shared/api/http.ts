import axios from 'axios';
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

// http.interceptors.response.use(
//   response => response.data,
//   error => Promise.reject(error)
// );


