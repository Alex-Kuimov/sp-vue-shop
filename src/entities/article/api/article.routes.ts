export const ARTICLE_API = {
    detail: (id: number) => `/api/articles/${id}`,
    update: (id: number) => `/api/articles/${id}`,
    delete: (id: number) => `/api/articles/${id}`,
    list: () => `/api/articles`,
    create: () => `/api/articles`,
}