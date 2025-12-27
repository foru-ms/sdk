import { ForumClient } from '../Client';
import { UserListResponse, User } from '../types';

export class UsersResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(params?: {
        query?: string;
        filter?: 'newest' | 'oldest';
        cursor?: string;
        limit?: number;
    }): Promise<UserListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }

        return this.client.request<UserListResponse>(`/users?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async retrieve(userId: string): Promise<User> {
        return this.client.request<User>(`/user/${userId}`, {
            method: 'GET',
        });
    }

    async create(payload: {
        username: string;
        email: string;
        password: string;
        displayName?: string;
        emailVerified?: boolean;
        roles?: string[];
        bio?: string;
        signature?: string;
        url?: string;
        extendedData?: Record<string, any>;
    }): Promise<User> {
        return this.client.request<User>('/user', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async update(id: string, payload: {
        username?: string;
        email?: string;
        password?: string;
        displayName?: string;
        emailVerified?: boolean;
        roles?: string[];
        bio?: string;
        signature?: string;
        url?: string;
        extendedData?: Record<string, any>;
    }): Promise<User> {
        return this.client.request<User>(`/user/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async delete(id: string): Promise<User & { deleted: boolean }> {
        return this.client.request<User & { deleted: boolean }>(`/user/${id}`, {
            method: 'DELETE',
        });
    }

    async getThreads(id: string, params?: {
        query?: string;
        cursor?: string;
        filter?: 'newest' | 'oldest';
        limit?: number;
    }): Promise<import('../types').ThreadListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request<import('../types').ThreadListResponse>(`/user/${id}/threads?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async getPosts(id: string, params?: {
        query?: string;
        cursor?: string;
        filter?: 'newest' | 'oldest';
        limit?: number;
    }): Promise<import('../types').PostListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request<import('../types').PostListResponse>(`/user/${id}/posts?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async getFollowers(id: string, params?: {
        query?: string;
        cursor?: string;
        filter?: 'newest' | 'oldest';
        limit?: number;
    }): Promise<{ followers: User[]; nextUserCursor?: string; count: number }> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request<{ followers: User[]; nextUserCursor?: string; count: number }>(`/user/${id}/followers?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async follow(id: string, followerId: string, extendedData?: any): Promise<any> {
        return this.client.request(`/user/${id}/followers`, {
            method: 'POST',
            body: JSON.stringify({ followerId, extendedData }),
        });
    }

    async unfollow(id: string, followerId: string): Promise<any> {
        return this.client.request(`/user/${id}/followers?followerId=${followerId}`, {
            method: 'DELETE',
        });
    }

    async getFollowing(id: string, params?: {
        query?: string;
        cursor?: string;
        filter?: 'newest' | 'oldest';
        limit?: number;
    }): Promise<{ following: any[]; nextUserCursor?: string; count: number }> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }
        return this.client.request<{ following: any[]; nextUserCursor?: string; count: number }>(`/user/${id}/following?${searchParams.toString()}`, {
            method: 'GET',
        });
    }
}
