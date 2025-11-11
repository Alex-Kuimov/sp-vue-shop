export const USER_API = {
    detail: (id: number) => `/api/users/${id}`,
    list: () => `/api/users`,
    create: () => `/api/users`,
    update: (id: number) => `/api/users/${id}`,
} 