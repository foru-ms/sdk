import { ForumClient } from '../Client';
import { Integration, IntegrationListResponse } from '../types';

export class IntegrationsResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(): Promise<IntegrationListResponse> {
        return this.client.request<IntegrationListResponse>('/integrations', {
            method: 'GET',
        });
    }

    async create(payload: {
        type: 'SLACK' | 'DISCORD' | 'SALESFORCE' | 'HUBSPOT' | 'OKTA' | 'AUTH0';
        name: string;
        config: any;
    }): Promise<{ integration: Integration }> {
        return this.client.request<{ integration: Integration }>('/integrations', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async retrieve(id: string): Promise<{ integration: Integration }> {
        return this.client.request<{ integration: Integration }>(`/integrations/${id}`, {
            method: 'GET',
        });
    }

    async update(id: string, payload: {
        name?: string;
        config?: any;
        active?: boolean;
    }): Promise<{ integration: Integration }> {
        return this.client.request<{ integration: Integration }>(`/integrations/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload),
        });
    }

    async delete(id: string): Promise<{ success: boolean }> {
        return this.client.request<{ success: boolean }>(`/integrations/${id}`, {
            method: 'DELETE',
        });
    }
}
