export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface CategoryCreateDTO {
    name: string;
    slug: string;
    description: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    status: string;
}

export interface CategoryUpdateDTO {
    name: string;
    slug: string;
    description: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    status: string;
}
