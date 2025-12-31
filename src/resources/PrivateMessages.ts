import { ForumClient } from '../Client';
import { PrivateMessage, PrivateMessageListResponse } from '../types';

export class PrivateMessagesResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(params?: {
        query?: string;
        userId?: string;
        filter?: 'newest' | 'oldest';
        cursor?: string;
        limit?: number;
    }): Promise<PrivateMessageListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value as string);
                }
            });
        }

        return this.client.request<PrivateMessageListResponse>(`/private-messages?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async create(payload: {
        title?: string;
        body: string;
        recipientId: string;
        senderId?: string; // Optional if inferred from token
        extendedData?: Record<string, any>;
    }): Promise<PrivateMessage> {
        return this.client.request<PrivateMessage>('/private-message', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async retrieve(id: string): Promise<PrivateMessage> {
        return this.client.request<PrivateMessage>(`/private-message/${id}`, {
            method: 'GET',
        });
    }

    async reply(id: string, payload: {
        body: string;
        senderId: string;
        recipientId: string;
        extendedData?: Record<string, any>;
    }): Promise<PrivateMessage> {
        return this.client.request<PrivateMessage>(`/private-message/${id}`, {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async update(id: string, payload: {
        status?: string;
        extendedData?: Record<string, any>;
    }): Promise<PrivateMessage> {
        return this.client.request<PrivateMessage>(`/private-message/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload),
        });
    }

    async delete(id: string): Promise<PrivateMessage & { deleted: boolean }> {
        return this.client.request<PrivateMessage & { deleted: boolean }>(`/private-message/${id}`, {
            method: 'DELETE',
        });
    }
}
