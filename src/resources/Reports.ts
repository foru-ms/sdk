import { ForumClient } from '../Client';
import { Report, ReportListResponse } from '../types';

export class ReportsResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async list(params?: {
        reporterId?: string;
        reportedId?: string;
        read?: boolean;
        cursor?: string;
        filter?: 'newest' | 'oldest';
        limit?: number;
    }): Promise<ReportListResponse> {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, String(value));
                }
            });
        }

        return this.client.request<ReportListResponse>(`/reports?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    async create(payload: {
        reporterId: string;
        reportedId?: string;
        threadId?: string;
        postId?: string;
        privateMessageId?: string;
        type?: string;
        description?: string;
        extendedData?: Record<string, any>;
    }): Promise<Report> {
        return this.client.request<Report>('/report', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    async batchUpdate(payload: {
        reportIds: string[];
        read: boolean;
    }): Promise<{ count?: number; message?: string }> {
        return this.client.request<{ count?: number; message?: string }>('/reports', {
            method: 'PATCH',
            body: JSON.stringify(payload),
        });
    }

    async retrieve(id: string): Promise<Report> {
        return this.client.request<Report>(`/report/${id}`, {
            method: 'GET',
        });
    }

    async update(id: string, payload: {
        threadId?: string;
        postId?: string;
        privateMessageId?: string;
        reportedId?: string;
        reporterId?: string;
        type?: string;
        description?: string;
        read?: boolean;
        extendedData?: Record<string, any>;
    }): Promise<Report> {
        return this.client.request<Report>(`/report/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
    }

    async delete(id: string): Promise<Report & { deleted: boolean }> {
        return this.client.request<Report & { deleted: boolean }>(`/report/${id}`, {
            method: 'DELETE',
        });
    }

    async updateStatus(id: string, read: boolean): Promise<Report> {
        return this.client.request<Report>(`/report/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ read }),
        });
    }
}
