import { ForumClient } from '../Client';
import { SearchResponse } from '../types';

export class SearchResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async search(params: {
        query: string;
        type: 'threads' | 'posts' | 'users' | 'tags';
        cursor?: string;
        limit?: number;
    }): Promise<SearchResponse> {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                searchParams.append(key, value as string);
            }
        });

        return this.client.request<SearchResponse>(`/search?${searchParams.toString()}`, {
            method: 'GET',
        });
    }
}
