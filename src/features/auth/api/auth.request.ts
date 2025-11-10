import { http } from '@/shared/api';
import { API } from './auth.routes';
import type { LoginRequest } from '../model/auth.interface';

const loginApi = async (LoginData: LoginRequest) => {
    try {
        const { data } = await http.post(API.login(), LoginData);
        return data.token;
    } catch (err) {
        console.error('Login error:', err);
        throw err;
    }
}

const logoutApi = async () => {
    try {
        await http.post(API.logout());
    } catch (err) {
        console.error('Logout error:', err);
        throw err;
    }
}

export { loginApi, logoutApi };