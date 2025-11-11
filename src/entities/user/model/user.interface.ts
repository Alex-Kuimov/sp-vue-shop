export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
    updated_at: string;
}

export interface UserCreateDTO {
    name: string
    email: string
    password: string
    password_confirmation: string
    role: string
}