import { ForumClient } from '../Client';
import { TagListResponse } from '../types';

export class TagsResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(params?: {
        query?: string;
        cursor?: string;
    }): Promise<TagListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }

        return this.client.request<TagListResponse>(`/tags?${searchParams.toString()}`, {
            method: 'GET',
        });
    }
    async create(payload: {
        name: string;
        description?: string;
        color?: string;
        extendedData?: Record<string, any>;
    }): Promise<import('../types').Tag> {
        return this.client.request<import('../types').Tag>('/tag', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async retrieve(id: string, params?: { userId?: string }): Promise<import('../types').Tag & { isSubscribed?: boolean }> {
        const searchParams = new URLSearchParams();
        if (params?.userId) searchParams.append('userId', params.userId);

        return this.client.request<import('../types').Tag & { isSubscribed?: boolean }>(`/tag/${id}?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async update(id: string, payload: {
        name?: string;
        description?: string;
        color?: string;
        extendedData?: Record<string, any>;
    }): Promise<import('../types').Tag> {
        return this.client.request<import('../types').Tag>(`/tag/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async delete(id: string): Promise<import('../types').Tag & { deleted: boolean }> {
        return this.client.request<import('../types').Tag & { deleted: boolean }>(`/tag/${id}`, {
            method: 'DELETE',
        });
    }

    async getThreads(id: string, params?: {
        query?: string;
        cursor?: string;
        filter?: 'newest' | 'oldest';
    }): Promise<import('../types').ThreadListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request<import('../types').ThreadListResponse>(`/tag/${id}/threads?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async subscribe(id: string, userId: string): Promise<any> {
        return this.client.request(`/tag/${id}/subscribers`, {
            method: 'POST',
            body: JSON.stringify({ userId }),
        });
    }

    async unsubscribe(id: string, userId: string): Promise<any> {
        return this.client.request(`/tag/${id}/subscribers?userId=${userId}`, {
            method: 'DELETE',
        });
    }

    async getSubscribers(id: string, params?: {
        cursor?: string;
    }): Promise<any> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request(`/tag/${id}/subscribers?${searchParams.toString()}`, { method: 'GET' });
    }

    async listSubscribed(params: {
        userId: string;
        query?: string;
        cursor?: string;
    }): Promise<TagListResponse> {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                searchParams.append(key, value as string);
            }
        });

        return this.client.request<TagListResponse>(`/tags/subscribed?${searchParams.toString()}`, {
            method: 'GET',
        });
    }
}
