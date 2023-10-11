import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Author {
    id: number;
    attributes: {
        firstname: string;
        lastname: string;
        username: string | null;
        preferedLanguage: string | null;
        createdAt: string;
        updatedAt: string;
    };
}

export interface CoverImage {
    id: number;
    attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
            small: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string | null;
                width: number;
                height: number;
                size: number;
                url: string;
                provider_metadata: {
                    public_id: string;
                    resource_type: string;
                };
            };
            thumbnail: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string | null;
                width: number;
                height: number;
                size: number;
                url: string;
                provider_metadata: {
                    public_id: string;
                    resource_type: string;
                };
            };
            large: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string | null;
                width: number;
                height: number;
                size: number;
                url: string;
                provider_metadata: {
                    public_id: string;
                    resource_type: string;
                };
            };
            medium: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string | null;
                width: number;
                height: number;
                size: number;
                url: string;
                provider_metadata: {
                    public_id: string;
                    resource_type: string;
                };
            };
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: {
            public_id: string;
            resource_type: string;
        };
        createdAt: string;
        updatedAt: string;
    };
}

export interface Post {
    id: number;
    attributes: {
        title: string;
        content: string;
        published: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        author: {
            data: Author;
        };
        cover: {
            data: CoverImage;
        };
    };

}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface PostResponse {
    data: Post[];
    meta: {
        pagination: Pagination;
    };
}


export interface PostShort {
    title: string;
    content: MDXRemoteSerializeResult;
    coverImage: string;
    name: string;
}