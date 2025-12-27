import { ForumClient } from '../Client';
import { Webhook, WebhookListResponse } from '../types';

/**
 * Resource for managing webhooks
 */
export class WebhooksResource {
    private client: ForumClient;

    constructor(client: ForumClient) {
        this.client = client;
    }

    /**
     * List all webhooks
     * @returns Promise resolving to list of webhooks
     */
    async list(): Promise<WebhookListResponse> {
        return this.client.request<WebhookListResponse>('/webhooks', {
            method: 'GET',
        });
    }

    /**
     * Create a new webhook
     * @param payload - Webhook configuration
     * @returns Promise resolving to created webhook
     */
    async create(payload: {
        name: string;
        url: string;
        events: string[];
    }): Promise<{ webhook: Webhook }> {
        return this.client.request<{ webhook: Webhook }>('/webhooks', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    }

    /**
     * Get a webhook by ID
     * @param id - Webhook ID
     * @returns Promise resolving to webhook details
     */
    async retrieve(id: string): Promise<{ webhook: Webhook }> {
        return this.client.request<{ webhook: Webhook }>(`/webhooks/${id}`, {
            method: 'GET',
        });
    }

    /**
     * Update a webhook
     * @param id - Webhook ID
     * @param payload - Updated webhook data
     * @returns Promise resolving to updated webhook
     */
    async update(id: string, payload: {
        name?: string;
        url?: string;
        events?: string[];
        active?: boolean;
    }): Promise<{ webhook: Webhook }> {
        return this.client.request<{ webhook: Webhook }>(`/webhooks/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload),
        });
    }

    /**
     * Delete a webhook
     * @param id - Webhook ID
     * @returns Promise resolving to deletion confirmation
     */
    async delete(id: string): Promise<{ success: boolean }> {
        return this.client.request<{ success: boolean }>(`/webhooks/${id}`, {
            method: 'DELETE',
        });
    }

    /**
     * Get webhook delivery history
     * @param id - Webhook ID
     * @param params - Query parameters
     * @returns Promise resolving to delivery history
     */
    async getDeliveries(id: string, params?: { cursor?: string; limit?: number }): Promise<{ deliveries: any[]; total: number; nextCursor?: string }> {
        const searchParams = new URLSearchParams();
        if (params?.cursor) searchParams.append('cursor', params.cursor);
        if (params?.limit) searchParams.append('limit', params.limit.toString());

        return this.client.request<{ deliveries: any[]; total: number; nextCursor?: string }>(`/webhooks/${id}/deliveries?${searchParams.toString()}`, {
            method: 'GET',
        });
    }

    /**
     * Verify webhook signature for security
     * @param payload - Request body (should be the original object, not stringified)
     * @param signature - Signature from X-Webhook-Signature header
     * @param timestamp - Timestamp from X-Webhook-Timestamp header (in milliseconds)
     * @param secret - Webhook secret from creation
     * @param maxAge - Maximum age of webhook in milliseconds (default: 5 minutes)
     * @returns True if signature is valid and timestamp is recent
     * @example
     * ```typescript
     * // In your webhook handler
     * app.post('/webhook', (req, res) => {
     *   const signature = req.headers['x-webhook-signature'];
     *   const timestamp = req.headers['x-webhook-timestamp'];
     *   const event = req.headers['x-webhook-event'];
     *   
     *   // Verify signature and timestamp
     *   const isValid = client.webhooks.verifySignature(
     *     req.body,
     *     signature,
     *     timestamp,
     *     'your_webhook_secret'
     *   );
     *   
     *   if (!isValid) {
     *     return res.status(401).send('Invalid signature');
     *   }
     *   
     *   // Process webhook...
     *   console.log('Event:', event);
     *   res.sendStatus(200);
     * });
     * ```
     */
    verifySignature(
        payload: any,
        signature: string,
        timestamp: string,
        secret: string,
        maxAge: number = 5 * 60 * 1000 // 5 minutes default
    ): boolean {
        try {
            // Verify timestamp (prevent replay attacks)
            const webhookTimestamp = parseInt(timestamp, 10);
            if (isNaN(webhookTimestamp)) {
                console.error('Invalid webhook timestamp format');
                return false;
            }

            const age = Date.now() - webhookTimestamp;
            if (age > maxAge) {
                console.error('Webhook timestamp too old:', age, 'ms');
                return false;
            }

            // Use Node.js crypto if available
            if (typeof require !== 'undefined') {
                try {
                    const crypto = require('crypto');

                    // Create the signed data: timestamp.payload
                    const data = `${timestamp}.${JSON.stringify(payload)}`;

                    // Calculate expected signature
                    const expectedSignature = crypto
                        .createHmac('sha256', secret)
                        .update(data)
                        .digest('hex');

                    // Use timing-safe comparison
                    if (crypto.timingSafeEqual) {
                        return crypto.timingSafeEqual(
                            Buffer.from(signature),
                            Buffer.from(expectedSignature)
                        );
                    }

                    // Fallback to simple comparison (less secure)
                    return signature === expectedSignature;

                } catch (error) {
                    console.error('Error using Node.js crypto:', error);
                    // Fall through to browser implementation
                }
            }

            // For browser environments or when Node crypto is not available
            console.warn('Webhook signature verification not fully supported in this environment');
            console.warn('Please use Node.js for secure webhook verification');
            return false;

        } catch (error) {
            console.error('Error verifying webhook signature:', error);
            return false;
        }
    }
}
