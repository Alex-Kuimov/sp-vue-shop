import { http } from '@/shared/api';
import { ARTICLE_API } from './article.routes';
import type { Article, ArticleCreateDTO, ArticleUpdateDTO } from '../model/article.interface';

const getArticle = async (id: number) => {
    const { data } = await http.get<Article>(ARTICLE_API.detail(id));
    return data;
}

const getArticles = async (page: number = 1, search: string = '') => {
    const res = await http.get<{ data: Article[], current_page: number, last_page: number }>(ARTICLE_API.list(), {
        params: { page, search }
    });
    return res.data;
}

const createArticle = async (article: ArticleCreateDTO) => {
    const res = await http.post<{ data: Article }>(ARTICLE_API.create(), article);
    return res.data;
}

const updateArticle = async (id: number, article: ArticleUpdateDTO) => {
    const res = await http.put<{ data: Article }>(ARTICLE_API.update(id), article);
    return res.data;
}

const deleteArticle = async (id: number) => {
    const res = await http.delete(ARTICLE_API.delete(id));
    return res.data;
}

export { getArticle, getArticles, createArticle, updateArticle, deleteArticle };