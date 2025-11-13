import { http } from '@/shared/api/';
import { API } from './auth.routes';
import type { LoginRequest } from '../model/auth.interface';

const loginApi = async (LoginData: LoginRequest) => {
    const { data } = await http.post(API.login(), LoginData);
    return data.token;
}

const logoutApi = async () => {
    await http.post(API.logout());
}

export { loginApi, logoutApi };