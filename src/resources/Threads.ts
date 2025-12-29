import { ForumClient } from '../Client';
import { ThreadListResponse, ThreadFilter, InteractionType } from '../types';
import { PollResults } from '../response-types';

export class ThreadsResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(params?: {
        query?: string;
        tagId?: string;
        filter?: ThreadFilter;
        type?: InteractionType;
        cursor?: string;
        userId?: string;
        limit?: number;
    }): Promise<ThreadListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }

        return this.client.request<ThreadListResponse>(`/threads?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async create(payload: import('../types').CreateThreadPayload): Promise<import('../types').Thread> {
        return this.client.request<import('../types').Thread>('/thread', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async retrieve(threadId: string): Promise<import('../types').Thread> {
        return this.client.request<import('../types').Thread>(`/thread/${threadId}`, {
            method: 'GET',
        });
    }

    async update(threadId: string, payload: import('../types').UpdateThreadPayload): Promise<import('../types').Thread> {
        return this.client.request<import('../types').Thread>(`/thread/${threadId}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async delete(threadId: string, payload?: { userId?: string }): Promise<import('../types').Thread & { deleted: boolean }> {
        return this.client.request<import('../types').Thread & { deleted: boolean }>(`/thread/${threadId}`, {
            method: 'DELETE',
            body: payload ? JSON.stringify(payload) : undefined,
        });
    }
    async getPosts(id: string, params?: {
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
        return this.client.request(`/thread/${id}/posts?${searchParams.toString()}`, { method: 'GET' });
    }

    async like(id: string, userId?: string, extendedData?: any): Promise<any> {
        return this.client.request(`/thread/${id}/likes`, {
            method: 'POST',
            body: JSON.stringify({ userId, extendedData }),
        });
    }

    async unlike(id: string, userId?: string): Promise<any> {
        return this.client.request(`/thread/${id}/likes`, {
            method: 'DELETE',
            body: JSON.stringify({ userId }),
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
        return this.client.request(`/thread/${id}/likes?${searchParams.toString()}`, { method: 'GET' });
    }

    async dislike(id: string, userId?: string, extendedData?: any): Promise<any> {
        return this.client.request(`/thread/${id}/dislikes`, {
            method: 'POST',
            body: JSON.stringify({ userId, extendedData }),
        });
    }

    async undislike(id: string, userId?: string): Promise<any> {
        return this.client.request(`/thread/${id}/dislikes`, {
            method: 'DELETE',
            body: JSON.stringify({ userId }),
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
        return this.client.request(`/thread/${id}/dislikes?${searchParams.toString()}`, { method: 'GET' });
    }

    async subscribe(id: string, userId?: string, extendedData?: any): Promise<any> {
        return this.client.request(`/thread/${id}/subscribers`, {
            method: 'POST',
            body: JSON.stringify({ userId, extendedData }),
        });
    }

    async unsubscribe(id: string, userId?: string): Promise<any> {
        return this.client.request(`/thread/${id}/subscribers`, {
            method: 'DELETE',
            body: JSON.stringify({ userId }),
        });
    }

    async getSubscribers(id: string, params?: {
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
        return this.client.request(`/thread/${id}/subscribers?${searchParams.toString()}`, { method: 'GET' });
    }

    async upvote(id: string, userId?: string, extendedData?: any): Promise<any> {
        return this.client.request(`/thread/${id}/upvotes`, {
            method: 'POST',
            body: JSON.stringify({ userId, extendedData }),
        });
    }

    async unupvote(id: string, userId?: string): Promise<any> {
        return this.client.request(`/thread/${id}/upvotes`, {
            method: 'DELETE',
            body: JSON.stringify({ userId }),
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
        return this.client.request(`/thread/${id}/upvotes?${searchParams.toString()}`, { method: 'GET' });
    }

    async downvote(id: string, userId?: string, extendedData?: any): Promise<any> {
        return this.client.request(`/thread/${id}/downvotes`, {
            method: 'POST',
            body: JSON.stringify({ userId, extendedData }),
        });
    }

    async undownvote(id: string, userId?: string): Promise<any> {
        return this.client.request(`/thread/${id}/downvotes`, {
            method: 'DELETE',
            body: JSON.stringify({ userId }),
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
        return this.client.request(`/thread/${id}/downvotes?${searchParams.toString()}`, { method: 'GET' });
    }

    async getPoll(threadId: string, userId?: string): Promise<any> {
        const searchParams = new URLSearchParams();
        if (userId) {
            searchParams.append('userId', userId);
        }

        const query = searchParams.toString();
        return this.client.request(
            `/thread/${threadId}/poll${query ? `?${query}` : ''}`,
            { method: 'GET' }
        );
    }

    async getPollResults(threadId: string, userId?: string): Promise<PollResults> {
        const searchParams = new URLSearchParams();
        if (userId) {
            searchParams.append('userId', userId);
        }

        const query = searchParams.toString();
        return this.client.request<PollResults>(
            `/thread/${threadId}/poll/results${query ? `?${query}` : ''}`,
            { method: 'GET' }
        );
    }

    async vote(id: string, optionId: string, userId?: string): Promise<any> {
        return this.client.request(`/thread/${id}/poll/votes`, {
            method: 'POST',
            body: JSON.stringify({ optionId, userId }),
        });
    }

    async voteUpdate(id: string, optionId: string, userId?: string): Promise<any> {
        return this.client.request(`/thread/${id}/poll/votes`, {
            method: 'PUT',
            body: JSON.stringify({ optionId, userId }),
        });
    }

    async unvote(id: string, userId?: string): Promise<any> {
        return this.client.request(`/thread/${id}/poll/votes`, {
            method: 'DELETE',
            body: JSON.stringify({ userId }),
        });
    }
}
