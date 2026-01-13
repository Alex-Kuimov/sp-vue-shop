import { http } from '@/shared/api';
import { CATEGORY_API } from './category.routes';
import type { Category, CategoryCreateDTO, CategoryUpdateDTO } from '../model/category.interface';

const getCategory = async (id: number) => {
    const { data } = await http.get<Category>(CATEGORY_API.detail(id));
    return data;
}

const getCategories = async (page: number = 1, search: string = '') => {
    const res = await http.get<{ data: Category[], current_page: number, last_page: number }>(CATEGORY_API.list(), {
        params: { page, search }
    });
    return res.data;
}

const createCategory = async (category: CategoryCreateDTO) => {
    const res = await http.post<{ data: Category }>(CATEGORY_API.create(), category);
    return res.data;
}

const updateCategory = async (id: number, category: CategoryUpdateDTO) => {
    const res = await http.put<{ data: Category }>(CATEGORY_API.update(id), category);
    return res.data;
}

const deleteCategory = async (id: number) => {
    const res = await http.delete(CATEGORY_API.delete(id));
    return res.data;
}

export { getCategory, getCategories, createCategory, updateCategory, deleteCategory };