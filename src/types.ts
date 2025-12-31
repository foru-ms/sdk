// Auth
export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
    displayName?: string;
    emailVerified?: boolean;
    roles?: string[];
    extendedData?: Record<string, any>;
}

export interface User {
    id: string;
    username: string;
    email?: string; // Optional as it might be private in some contexts
    displayName: string | null;
    roles?: any[]; // Refine if needed
    extendedData?: Record<string, any>;
    createdAt?: string;
    updatedAt?: string;
}

// Thread
export interface Thread {
    id: string;
    title: string;
    slug: string;
    body: string;
    userId: string;
    locked: boolean;
    pinned: boolean;
    createdAt: string;
    updatedAt: string;
    user?: User;
    likes?: any[];
    upvotes?: any[];
    tags?: any[];
    poll?: any;
    extendedData?: Record<string, any>;
    _count?: {
        Post: number;
        likes?: number;
        upvotes?: number;
    };
}

export interface CreateThreadPayload {
    title: string;
    body: string;
    userId?: string; // Optional if using token
    slug?: string;
    locked?: boolean;
    pinned?: boolean;
    tags?: string[];
    poll?: {
        title: string;
        options: {
            title: string;
            color?: string;
            extendedData?: Record<string, any>;
        }[];
    };
    extendedData?: Record<string, any>;
}

export interface UpdateThreadPayload {
    title?: string;
    slug?: string;
    body?: string;
    userId?: string;
    locked?: boolean;
    pinned?: boolean;
    extendedData?: Record<string, any>;
}

// Post
export interface Post {
    id: string;
    body: string;
    threadId: string;
    userId: string;
    parentId?: string | null;
    depth?: number;
    createdAt: string;
    updatedAt: string;
    user?: User;
    Thread?: {
        userId: string;
        title: string;
    };
    extendedData?: Record<string, any>;
}

export interface CreatePostPayload {
    body: string;
    threadId: string;
    userId?: string; // Optional if using token
    parentId?: string;
    extendedData?: Record<string, any>;
}

export interface UpdatePostPayload {
    body?: string;
    userId?: string;
    threadId?: string;
    parentId?: string;
    bestAnswer?: boolean;
    extendedData?: Record<string, any>;
}

export interface PaginatedResponse<T> {
    data: T[]; // Generic wrapper if API changes to this format
}

export interface ThreadListResponse {
    threads: Thread[];
    nextThreadCursor?: string;
    count: number;
}

export interface PostListResponse {
    posts: Post[];
    nextPostCursor?: string;
    count: number;
}

export interface LoginResponse {
    token: string;
}

export interface RegisterResponse {
    user: User;
    token: string;
}

export interface SecurityInfo {
    userId: string;
    username: string;
    registrationIp: string;
    registrationDate: string;
    lastIp: string;
    lastSeenAt: string;
    isOnline: boolean;
    emailVerified: boolean;
}

export type ThreadFilter = 'newest' | 'oldest';
export type InteractionType = 'created' | 'liked' | 'disliked' | 'upvoted' | 'downvoted' | 'subscribed';

export interface Tag {
    id: string;
    name: string;
    description: string | null;
    color: string | null;
    createdAt: string;
    updatedAt: string;
    _count?: {
        threads: number;
    };
    threads?: Thread[];
}

export interface UserListResponse {
    users: User[];
    nextUserCursor?: string;
    count: number;
}

export interface TagListResponse {
    tags: Tag[];
    nextTagCursor?: string;
    count?: number;
}

export interface Notification {
    id: string;
    threadId?: string;
    postId?: string;
    privateMessageId?: string;
    notifierId: string;
    notifiedId: string;
    type: string;
    description?: string;
    status: string;
    createdAt: string;
    extendedData?: Record<string, any>;
    post?: Post;
    thread?: Thread;
    notifier?: User;
    message?: string; // Computed field from API
    isSystem?: boolean;
}

export interface NotificationListResponse {
    list: Notification[];
    nextCursor?: string;
    count: number;
}

export interface SearchResponse {
    type?: 'tags' | 'posts' | 'threads' | 'users';
    tags?: Tag[];
    posts?: Post[];
    threads?: Thread[];
    nextCursor?: string;
}

export interface Webhook {
    id: string;
    name: string;
    url: string;
    events: { events: string[] } | string[]; // Accessing normalized events is better
    active: boolean;
    secret?: string; // Only on creation
    createdAt: string;
    updatedAt: string;
    _count?: {
        deliveries: number;
    };
}

export interface WebhookListResponse {
    webhooks: Webhook[];
}

export interface StatsResponse {
    counts: {
        threads: number;
        posts: number;
        users: number;
        reports: number;
    };
    latest: {
        id: string;
        createdAt: string;
        type: 'thread' | 'post' | 'user' | 'report';
        [key: string]: any;
    }[];
    usage: Record<string, any>;
    cursors: {
        threadCursor: string | null;
        postCursor: string | null;
        userCursor: string | null;
        reportCursor: string | null;
    };
}

export interface Integration {
    id: string;
    type: 'SLACK' | 'DISCORD' | 'SALESFORCE' | 'HUBSPOT' | 'OKTA' | 'AUTH0';
    name: string;
    active: boolean;
    createdAt: string;
    config?: any;
}

export interface IntegrationListResponse {
    integrations: Integration[];
}

export interface PrivateMessage {
    id: string;
    senderId: string;
    recipientId: string;
    title?: string;
    body: string;
    status: string;
    parentId?: string;
    children?: PrivateMessage[];
    sender?: User;
    recipient?: User;
    createdAt: string;
    updatedAt: string;
    extendedData?: Record<string, any>;
}

export interface PrivateMessageListResponse {
    privateMessages: PrivateMessage[];
    nextPrivateMessageCursor?: string;
    count: number;
}

export interface Report {
    id: string;
    reporterId: string;
    reportedId?: string;
    threadId?: string;
    postId?: string;
    privateMessageId?: string;
    type: string;
    description?: string;
    status: string;
    createdAt: string;
    post?: Post;
    thread?: Thread;
    privateMessage?: PrivateMessage;
    reported?: User;
    extendedData?: Record<string, any>;
}

export interface ReportListResponse {
    list: Report[];
    nextCursor?: string;
    count: number;
}

export interface Role {
    id: string;
    name: string;
    description?: string;
    color?: string;
    users?: User[];
    createdAt: string;
    updatedAt: string;
    extendedData?: Record<string, any>;
}

export interface RoleListResponse {
    roles: Role[];
    nextCursor?: string;
    count: number;
}

export interface SSOProvider {
    id: string;
    provider: 'OKTA' | 'AUTH0' | 'SAML';
    domain: string;
    active: boolean;
    createdAt: string;
    config?: any;
}

export interface SSOProviderListResponse {
    ssoProviders: SSOProvider[];
}


