import { ForumClient } from '../Client';
import { NotificationListResponse, Notification } from '../types';

export class NotificationsResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(params: {
        userId: string;
        read?: boolean;
        filter?: 'newest' | 'oldest';
        cursor?: string;
        limit?: number;
    }): Promise<NotificationListResponse> {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                searchParams.append(key, String(value));
            }
        });

        return this.client.request<NotificationListResponse>(`/notifications?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async markAllAsRead(userId: string, read: boolean = true): Promise<{ count: number }> {
        return this.client.request<{ count: number }>('/notifications', {
            method: 'PATCH',
            body: JSON.stringify({ userId, read }),
        });
    }

    async retrieve(id: string): Promise<Notification> {
        return this.client.request<Notification>(`/notification/${id}`, {
            method: 'GET',
        });
    }

    async update(id: string, payload: { read: boolean }): Promise<Notification> {
        return this.client.request<Notification>(`/notification/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload),
        });
    }

    async delete(id: string): Promise<Notification & { deleted: boolean }> {
        return this.client.request<Notification & { deleted: boolean }>(`/notification/${id}`, {
            method: 'DELETE',
        });
    }
    async create(payload: {
        threadId?: string;
        postId?: string;
        privateMessageId?: string;
        notifierId: string;
        notifiedId: string;
        type: string;
        description?: string;
        extendedData?: Record<string, any>;
    }): Promise<Notification> {
        return this.client.request<Notification>('/notification', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }
}
