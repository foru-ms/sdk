import { ForumClient } from '../Client';
import { Role, RoleListResponse } from '../types';

export class RolesResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(params?: {
        filter?: 'newest' | 'oldest';
        cursor?: string;
        limit?: number;
    }): Promise<RoleListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }

        return this.client.request<RoleListResponse>(`/roles?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async create(payload: {
        name: string;
        description?: string;
        color?: string;
        extendedData?: Record<string, any>;
    }): Promise<Role> {
        return this.client.request<Role>('/role', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async retrieve(id: string): Promise<Role> {
        return this.client.request<Role>(`/role/${id}`, {
            method: 'GET',
        });
    }

    async update(id: string, payload: {
        name?: string;
        description?: string;
        color?: string;
        extendedData?: Record<string, any>;
    }): Promise<Role> {
        return this.client.request<Role>(`/role/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async delete(id: string): Promise<Role & { deleted: boolean }> {
        return this.client.request<Role & { deleted: boolean }>(`/role/${id}`, {
            method: 'DELETE',
        });
    }
}
