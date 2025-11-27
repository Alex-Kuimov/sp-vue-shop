export interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    status: string;
    user_id: number;
    category_id: number;
    created_at: string;
    updated_at: string;
}

export interface ArticleCreateDTO {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    status: string;
    user_id: number;
    category_id: number;
}

export interface ArticleUpdateDTO {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    status: string;
    user_id: number;
    category_id: number;
}