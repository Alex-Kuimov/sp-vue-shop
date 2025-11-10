import { http } from '@/shared/api';
import { API } from './routes';

interface LoginData {
    email: string;
    password: string;
}

const login = async (LoginData: LoginData) => {

    try {
        const { data } = await http.post(API.login(), LoginData);
        //setToken(data.token);
        return true;
    } catch (err) {
        //console.error('Login error:', err);
        //error.value = 'Login Error';
    } finally {
        //loading.value = false;
    }

}



export { login };