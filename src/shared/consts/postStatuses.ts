interface PostStatus {
    value: string
    label: string
}

export const postStatusOptions: PostStatus[] = [
    { value: 'draft', label: 'Черновик' },
    { value: 'published', label: 'Опубликовано' },
]