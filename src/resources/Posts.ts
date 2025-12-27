import { ForumClient } from '../Client';
import { PostListResponse, InteractionType } from '../types';

export class PostsResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(params?: {
        query?: string;
        filter?: 'newest' | 'oldest';
        type?: InteractionType;
        cursor?: string;
        userId?: string;
        limit?: number;
    }): Promise<PostListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }

        return this.client.request<PostListResponse>(`/posts?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async create(payload: import('../types').CreatePostPayload): Promise<import('../types').Post> {
        return this.client.request<import('../types').Post>('/post', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async retrieve(postId: string): Promise<import('../types').Post> {
        return this.client.request<import('../types').Post>(`/post/${postId}`, {
            method: 'GET',
        });
    }

    async update(postId: string, payload: import('../types').UpdatePostPayload): Promise<import('../types').Post> {
        return this.client.request<import('../types').Post>(`/post/${postId}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async delete(postId: string, payload?: { userId: string }): Promise<import('../types').Post & { deleted: boolean }> {
        return this.client.request<import('../types').Post & { deleted: boolean }>(`/post/${postId}`, {
            method: 'DELETE',
            body: payload ? JSON.stringify(payload) : undefined,
        });
    }
    async getChildren(id: string, params?: {
        query?: string;
        cursor?: string;
        filter?: 'newest' | 'oldest';
        limit?: number;
    }): Promise<any> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request(`/post/${id}/posts?${searchParams.toString()}`, { method: 'GET' });
    }

    async like(id: string, userId?: string, extendedData?: any): Promise<any> {
        return this.client.request(`/post/${id}/likes`, {
            method: 'POST',
            body: JSON.stringify({ userId, extendedData }),
        });
    }

    async unlike(id: string, userId: string): Promise<any> {
        return this.client.request(`/post/${id}/likes?userId=${userId}`, {
            method: 'DELETE',
        });
    }

    async getLikes(id: string, params?: {
        cursor?: string;
        limit?: number;
    }): Promise<any> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request(`/post/${id}/likes?${searchParams.toString()}`, { method: 'GET' });
    }

    async dislike(id: string, userId?: string, extendedData?: any): Promise<any> {
        return this.client.request(`/post/${id}/dislikes`, {
            method: 'POST',
            body: JSON.stringify({ userId, extendedData }),
        });
    }

    async undislike(id: string, userId: string): Promise<any> {
        return this.client.request(`/post/${id}/dislikes?userId=${userId}`, {
            method: 'DELETE',
        });
    }

    async getDislikes(id: string, params?: {
        cursor?: string;
        limit?: number;
    }): Promise<any> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request(`/post/${id}/dislikes?${searchParams.toString()}`, { method: 'GET' });
    }

    async upvote(id: string, userId?: string, extendedData?: any): Promise<any> {
        return this.client.request(`/post/${id}/upvotes`, {
            method: 'POST',
            body: JSON.stringify({ userId, extendedData }),
        });
    }

    async unupvote(id: string, userId: string): Promise<any> {
        return this.client.request(`/post/${id}/upvotes?userId=${userId}`, {
            method: 'DELETE',
        });
    }

    async getUpvotes(id: string, params?: {
        cursor?: string;
        limit?: number;
    }): Promise<any> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request(`/post/${id}/upvotes?${searchParams.toString()}`, { method: 'GET' });
    }

    async downvote(id: string, userId?: string, extendedData?: any): Promise<any> {
        return this.client.request(`/post/${id}/downvotes`, {
            method: 'POST',
            body: JSON.stringify({ userId, extendedData }),
        });
    }

    async undownvote(id: string, userId: string): Promise<any> {
        return this.client.request(`/post/${id}/downvotes?userId=${userId}`, {
            method: 'DELETE',
        });
    }

    async getDownvotes(id: string, params?: {
        cursor?: string;
        limit?: number;
    }): Promise<any> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request(`/post/${id}/downvotes?${searchParams.toString()}`, { method: 'GET' });
    }
}
