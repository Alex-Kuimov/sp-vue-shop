import { http } from '@/shared/api';
import { USER_API } from './user.routes';
import type { User, UserCreateDTO } from '../model/user.interface';

const getUser = async (id: number) => {
    const { data } = await http.get<User>(USER_API.detail(id));
    return data;
}

const getUsers = async () => {
    const res = await http.get<{ data: User[] }>(USER_API.list());
    return res.data;
}

const createUser = async (user: UserCreateDTO) => {
    const res = await http.post<{ data: User }>(USER_API.create(), user);
    return res.data;
}

export { getUser, getUsers, createUser };