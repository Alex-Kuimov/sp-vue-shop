import { http } from '@/shared/api';
import { USER_API } from './user.routes';
import type { User, UserCreateDTO, UserUpdateDTO } from '../model/user.interface';

const getUser = async (id: number) => {
    const { data } = await http.get<User>(USER_API.detail(id));
    return data;
}

const getUsers = async (page: number = 1) => {
    const res = await http.get<{ data: User[], current_page: number, last_page: number }>(USER_API.list(), {
        params: { page }
    });
    return res.data;
}

const createUser = async (user: UserCreateDTO) => {
    const res = await http.post<{ data: User }>(USER_API.create(), user);
    return res.data;
}

const updateUser = async (id: number, user: UserUpdateDTO) => {
    const res = await http.put<{ data: User }>(USER_API.update(id), user);
    return res.data;
}

const deleteUser = async (id: number) => {
    const res = await http.delete<{ data: User }>(USER_API.delete(id));
    return res.data;
}

export { getUser, getUsers, createUser, updateUser, deleteUser };