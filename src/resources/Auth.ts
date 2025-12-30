import { ForumClient } from '../Client';
import { LoginResponse, RegisterResponse } from '../types';

export class AuthResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    async login(payload: { login: string; password: string; }): Promise<LoginResponse> {
        const response = await this.client.request<LoginResponse>('/auth/login', {
            method: 'POST',
            body: JSON.stringify(payload),
        });

        if (response.token) {
            this.client.setToken(response.token);
        }

        return response;
    }

    async register(payload: import('../types').RegisterPayload): Promise<RegisterResponse> {
        const response = await this.client.request<RegisterResponse>('/auth/register', {
            method: 'POST',
            body: JSON.stringify(payload),
        });

        if (response.token) {
            this.client.setToken(response.token);
        }

        return response;
    }

    async me(): Promise<import('../types').User> {
        return this.client.request<import('../types').User>('/auth/me', {
            method: 'GET',
        });
    }

    async forgotPassword(email: string): Promise<{ resetToken?: string; message?: string }> {
        return this.client.request<{ resetToken?: string; message?: string }>('/auth/forgot-password', {
            method: 'POST',
            body: JSON.stringify({ email }),
        });
    }

    async resetPassword(payload: {
        password: string;
        oldPassword?: string;
        email?: string;
        token?: string;
    }): Promise<{ message: string }> {
        const headers: Record<string, string> = {};
        if (payload.token) {
            headers['Authorization'] = `Bearer ${payload.token}`;
        }

        // Remove token from body
        const { token, ...body } = payload;

        return this.client.request<{ message: string }>('/auth/reset-password', {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });
    }

    /**
     * Get account security information for the authenticated user.
     * This includes IP addresses, registration date, last seen timestamp, and verification status.
     * Requires authentication token.
     * 
     * @returns Promise<SecurityInfo> Security information including IPs and account activity
     * @throws {ApiError} If not authenticated or user not found
     */
    async getSecurity(): Promise<import('../types').SecurityInfo> {
        return this.client.request<import('../types').SecurityInfo>('/auth/security', {
            method: 'GET',
        });
    }
}
