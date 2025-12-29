import { User } from './types';

/**
 * Rate limit information from API responses
 */
export interface RateLimitInfo {
    /** Maximum number of requests allowed in the time window */
    limit: number;
    /** Number of requests remaining in the current window */
    remaining: number;
    /** Unix timestamp when the rate limit resets */
    reset: number;
}

/**
 * Metadata included with API responses
 */
export interface ResponseMetadata {
    /** Rate limit information, if available */
    rateLimit?: RateLimitInfo;
    /** Request ID for debugging */
    requestId?: string;
}

/**
 * Generic API response wrapper
 */
export interface APIResponse<T> {
    /** Response data */
    data: T;
    /** Response metadata */
    meta?: ResponseMetadata;
}

/**
 * Response for interaction lists (likes, upvotes, etc.)
 */
export interface InteractionListResponse {
    /** List of users who performed the interaction */
    users: User[];
    /** Cursor for next page */
    nextCursor?: string;
    /** Total count of interactions */
    count: number;
}

/**
 * Response for poll data
 */
export interface PollResponse {
    /** Poll ID */
    id: string;
    /** Poll title */
    title: string;
    /** Poll options */
    options: PollOption[];
    /** Total number of votes */
    totalVotes: number;
    /** Whether the poll allows multiple votes */
    allowMultiple?: boolean;
    /** Poll expiration date */
    expiresAt?: string;
    /** User's vote, if userId was provided */
    userVote?: {
        optionId: string;
        votedAt: string;
    };
}

/**
 * Poll option data
 */
export interface PollOption {
    /** Option ID */
    id: string;
    /** Option title */
    title: string;
    /** Option color */
    color?: string;
    /** Number of votes for this option */
    votes: number;
    /** Percentage of total votes */
    percentage: number;
    /** Extended data */
    extendedData?: Record<string, any>;
}

/**
 * Simplified poll option for results
 */
export interface PollOptionResult {
    /** The ID of the poll option */
    id: string;
    /** The title of the poll option */
    title: string;
    /** The color of the poll option */
    color?: string;
    /** The number of votes this option received */
    votes: number;
}

/**
 * Poll results data
 */
export interface PollResults {
    /** List of poll options with results */
    options: PollOptionResult[];
    /** The option ID that the user voted for, or null if they haven't voted */
    userVote?: string | null;
}

/**
 * Response for batch operations
 */
export interface BatchOperationResponse {
    /** Number of items successfully processed */
    success: number;
    /** Number of items that failed */
    failed: number;
    /** Error details for failed items */
    errors?: Array<{
        id: string;
        error: string;
    }>;
}

/**
 * Pagination cursor response
 */
export interface CursorPagination<T> {
    /** Array of items */
    items: T[];
    /** Cursor for next page */
    nextCursor?: string;
    /** Whether there are more items */
    hasMore: boolean;
}
