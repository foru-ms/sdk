import { ForumClient } from '../Client';
import { SSOProvider, SSOProviderListResponse } from '../types';

export class SSOResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(): Promise<SSOProviderListResponse> {
        return this.client.request<SSOProviderListResponse>('/sso', {
            method: 'GET',
        });
    }

    async create(payload: {
        provider: 'OKTA' | 'AUTH0' | 'SAML';
        domain: string;
        config: any;
    }): Promise<{ ssoProvider: SSOProvider }> {
        return this.client.request<{ ssoProvider: SSOProvider }>('/sso', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async retrieve(id: string): Promise<{ ssoProvider: SSOProvider }> {
        return this.client.request<{ ssoProvider: SSOProvider }>(`/sso/${id}`, {
            method: 'GET',
        });
    }

    async update(id: string, payload: {
        domain?: string;
        config?: any;
        active?: boolean;
    }): Promise<{ ssoProvider: SSOProvider }> {
        return this.client.request<{ ssoProvider: SSOProvider }>(`/sso/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload),
        });
    }

    async delete(id: string): Promise<{ success: boolean }> {
        return this.client.request<{ success: boolean }>(`/sso/${id}`, {
            method: 'DELETE',
        });
    }
}
