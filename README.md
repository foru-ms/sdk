# @foru-ms/sdk

The official JavaScript/TypeScript SDK for [Foru.ms](https://foru.ms). Build powerful community features directly into your application.

This SDK is fully typed and provides a comprehensive interface to the Foru.ms API.

## Installation

```bash
npm install @foru-ms/sdk
# or
yarn add @foru-ms/sdk
# or
pnpm add @foru-ms/sdk
```

## Setup & Initialization

```typescript
import { ForumClient } from '@foru-ms/sdk';

const client = new ForumClient({
  apiKey: 'your_api_key',
  // baseUrl: 'https://api.foru.ms/v1' // Optional
});

// Set an authentication token (JWT) for user-scoped requests
client.setToken('user_jwt_token');
```

## API Reference

### Auth (`client.auth`)

*   `login(payload: { login: string; password: string })`: Login a user. Returns `{ token: string }`.
*   `register(payload: RegisterPayload)`: Register a new user.
*   `me()`: Get specific details of the currently authenticated user.
*   `forgotPassword(email: string)`: Initiate password reset flow.
*   `resetPassword(payload: { password: string; oldPassword?: string; email?: string; token?: string })`: Reset password using token or old password.

### Threads (`client.threads`)

*   `list(params: { limit?: number; filter?: 'newest' | 'oldest'; tagId?: string; cursor?: string })`: List threads.
*   `create(payload: CreateThreadPayload)`: Create a new thread.
*   `retrieve(id: string)`: Get a thread by ID.
*   `update(id: string, payload: UpdateThreadPayload)`: Update a thread.
*   `delete(id: string)`: Delete a thread.
*   `getPosts(id: string, params: { cursor?: string; filter?: 'newest' | 'oldest' })`: Get posts in a thread.
*   `like(id: string, userId: string, extendedData?: any)`: Like a thread.
*   `unlike(id: string, userId: string)`: Unlike a thread.
*   `getLikes(id: string, params?: { cursor?: string })`: Get users who liked a thread.
*   `dislike(id: string, userId: string, extendedData?: any)`: Dislike a thread.
*   `undislike(id: string, userId: string)`: Remove dislike from a thread.
*   `getDislikes(id: string, params?: { cursor?: string })`: Get users who disliked a thread.
*   `subscribe(id: string, userId: string)`: Subscribe to a thread.
*   `unsubscribe(id: string, userId: string)`: Unsubscribe from a thread.
*   `getSubscribers(id: string, params?: { cursor?: string })`: Get users subscribed to a thread.
*   `upvote(id: string, userId: string, extendedData?: any)`: Upvote a thread.
*   `unupvote(id: string, userId: string)`: Remove upvote from a thread.
*   `getUpvotes(id: string, params?: { cursor?: string })`: Get users who upvoted a thread.
*   `downvote(id: string, userId: string, extendedData?: any)`: Downvote a thread.
*   `undownvote(id: string, userId: string)`: Remove downvote from a thread.
*   `getDownvotes(id: string, params?: { cursor?: string })`: Get users who downvoted a thread.
*   `getPoll(id: string, userId?: string)`: Get poll results.
*   `vote(id: string, userId: string, optionId: string)`: Vote in a thread poll.
*   `voteUpdate(id: string, userId: string, optionId: string)`: Change vote.
*   `unvote(id: string, userId: string)`: Remove vote.

### Posts (`client.posts`)

*   `list(params: { limit?: number; cursor?: string; filter?: 'newest' | 'oldest'; threadId?: string })`: List posts (flat).
*   `create(payload: CreatePostPayload)`: Create a reply.
*   `retrieve(id: string)`: Get a post by ID.
*   `update(id: string, payload: UpdatePostPayload)`: Update a post.
*   `delete(id: string)`: Delete a post.
*   `getChildren(id: string, params: { cursor?: string; filter?: 'newest' | 'oldest' })`: Get child posts (nested replies).
*   `like(id: string, userId: string, extendedData?: any)`: Like a post.
*   `unlike(id: string, userId: string)`: Unlike a post.
*   `getLikes(id: string, params?: { cursor?: string })`: Get users who liked a post.
*   `dislike(id: string, userId: string, extendedData?: any)`: Dislike a post.
*   `undislike(id: string, userId: string)`: Remove dislike.
*   `getDislikes(id: string, params?: { cursor?: string })`: Get users who disliked a post.
*   `upvote(id: string, userId: string, extendedData?: any)`: Upvote a post.
*   `unupvote(id: string, userId: string)`: Remove upvote.
*   `getUpvotes(id: string, params?: { cursor?: string })`: Get users who upvoted a post.
*   `downvote(id: string, userId: string, extendedData?: any)`: Downvote a post.
*   `undownvote(id: string, userId: string)`: Remove downvote.
*   `getDownvotes(id: string, params?: { cursor?: string })`: Get users who downvoted a post.

### Users (`client.users`)

*   `list(params?: { query?: string; filter?: 'newest' | 'oldest'; cursor?: string })`: List users.
*   `retrieve(userId: string)`: Get user by ID.
*   `create(payload: { username: string; email: string; password: string; displayName?: string; emailVerified?: boolean; roles?: string[]; bio?: string; signature?: string; url?: string; extendedData?: Record<string, any> })`: Create a user (Admin).
*   `update(id: string, payload: { username?: string; email?: string; password?: string; displayName?: string; emailVerified?: boolean; roles?: string[]; bio?: string; signature?: string; url?: string; extendedData?: Record<string, any> })`: Update a user.
*   `delete(id: string)`: Delete a user.
*   `getThreads(id: string, params?: { query?: string; cursor?: string; filter?: 'newest' | 'oldest' })`: Get all threads created by a user.
*   `getPosts(id: string, params?: { query?: string; cursor?: string; filter?: 'newest' | 'oldest' })`: Get all posts created by a user.
*   `getFollowers(id: string, params?: { query?: string; cursor?: string; filter?: 'newest' | 'oldest' })`: Get user's followers.
*   `getFollowing(id: string, params?: { query?: string; cursor?: string; filter?: 'newest' | 'oldest' })`: Get who a user follows.
*   `follow(id: string, followerId: string, extendedData?: any)`: Follow a user.
*   `unfollow(id: string, followerId: string)`: Unfollow a user.


### Tags (`client.tags`)

*   `list(params?: { query?: string; cursor?: string })`: List tags.
*   `create(payload: { name: string; description?: string; color?: string; extendedData?: Record<string, any> })`: Create a tag.
*   `retrieve(id: string, params?: { userId?: string })`: Get a tag.
*   `update(id: string, payload: { name?: string; description?: string; color?: string; extendedData?: Record<string, any> })`: Update a tag.
*   `delete(id: string)`: Delete a tag.
*   `getThreads(id: string, params?: { query?: string; cursor?: string; filter?: 'newest' | 'oldest' })`: Get all threads with a specific tag.
*   `subscribe(id: string, userId: string)`: Subscribe to a tag.
*   `unsubscribe(id: string, userId: string)`: Unsubscribe from a tag.
*   `getSubscribers(id: string, params?: { cursor?: string })`: Get users subscribed to a tag.
*   `listSubscribed(params: { userId: string; query?: string; cursor?: string })`: List tags a user is subscribed to.


### Notifications (`client.notifications`)

*   `list(params: { userId: string; read?: boolean; filter?: 'newest' | 'oldest'; cursor?: string })`: List notifications.
*   `markAllAsRead(userId: string, read?: boolean)`: Bulk update read status. Default is `true`.
*   `create(payload: { threadId?: string; postId?: string; privateMessageId?: string; notifierId: string; notifiedId: string; type: string; description?: string; extendedData?: Record<string, any> })`: Create a notification manually.
*   `retrieve(id: string)`: Get a notification.
*   `update(id: string, payload: { read: boolean })`: Update a notification.
*   `delete(id: string)`: Delete a notification.

### Search (`client.search`)

*   `search(params: { query: string; type: 'threads' | 'posts' | 'users' | 'tags'; cursor?: string })`: Polymorphic search.

### Webhooks (`client.webhooks`)

*   `list()`: List webhooks.
*   `create(payload: { name: string; url: string; events: string[] })`: Create a webhook.
*   `retrieve(id: string)`: Get a webhook.
*   `update(id: string, payload: any)`: Update a webhook.
*   `delete(id: string)`: Delete a webhook.
*   `getDeliveries(id: string, params: { cursor?: string })`: Get webhook delivery history.

### Stats (`client.stats`)

*   `get(params?: { filter?: string; threadCursor?: string; postCursor?: string; ... })`: Get instance statistics.

### Integrations (`client.integrations`)

*   `list()`: Get all configured integrations.
*   `create(payload: { type: 'SLACK' | 'DISCORD' | 'SALESFORCE' | 'HUBSPOT' | 'OKTA' | 'AUTH0'; name: string; config: any })`: Configure an integration (Slack, Discord, etc.).
*   `retrieve(id: string)`: Get integration details.
*   `update(id: string, payload: { name?: string; config?: any; active?: boolean })`: Update an integration.
*   `delete(id: string)`: Remove an integration.

### Private Messages (`client.privateMessages`)

*   `list(params?: { query?: string; userId?: string; filter?: 'newest' | 'oldest'; cursor?: string })`: List private messages.
*   `create(payload: { title?: string; body: string; recipientId: string; senderId?: string; extendedData?: Record<string, any> })`: Send a direct message.
*   `retrieve(id: string)`: Get a message thread.
*   `reply(id: string, payload: { body: string; senderId: string; recipientId: string; extendedData?: Record<string, any> })`: Reply to a message.
*   `update(id: string, payload: { read?: boolean; extendedData?: Record<string, any> })`: Update a message (e.g., mark as read).
*   `delete(id: string)`: Delete a message.

### Reports (`client.reports`)

*   `list(params?: { reporterId?: string; reportedId?: string; read?: boolean; cursor?: string; filter?: 'newest' | 'oldest' })`: List reports.
*   `create(payload: { reporterId: string; reportedId?: string; threadId?: string; postId?: string; privateMessageId?: string; type?: string; description?: string; extendedData?: Record<string, any> })`: Submit a report.
*   `batchUpdate(payload: { reportIds: string[]; read: boolean })`: Bulk update status.
*   `retrieve(id: string)`: Get a report.
*   `update(id: string, payload: { threadId?: string; postId?: string; privateMessageId?: string; reportedId?: string; reporterId?: string; type?: string; description?: string; read?: boolean; extendedData?: Record<string, any> })`: Update report details.
*   `delete(id: string)`: Delete a report.
*   `updateStatus(id: string, read: boolean)`: Update read status of a report.

### Roles (`client.roles`)

*   `list(params?: { filter?: 'newest' | 'oldest'; cursor?: string })`: List user roles.
*   `create(payload: { name: string; description?: string; color?: string; extendedData?: Record<string, any> })`: Create a new role.
*   `retrieve(id: string)`: Get a role.
*   `update(id: string, payload: { name?: string; description?: string; color?: string; extendedData?: Record<string, any> })`: Update a role.
*   `delete(id: string)`: Delete a role.

### SSO (`client.sso`)

*   `list()`: List SSO providers.
*   `create(payload: { provider: 'OKTA' | 'AUTH0' | 'SAML'; domain: string; config: any })`: Configure SSO.
*   `retrieve(id: string)`: Get SSO provider details.
*   `update(id: string, payload: { domain?: string; config?: any; active?: boolean })`: Update SSO configuration.
*   `delete(id: string)`: Remove SSO provider.

## Types

Import all available interfaces and types directly from the package:

```typescript
import { 
  // Auth Types
  RegisterPayload,
  User,
  LoginResponse,
  
  // Thread Types
  Thread,
  CreateThreadPayload,
  UpdateThreadPayload,
  ThreadListResponse,
  ThreadFilter,
  
  // Post Types
  Post,
  CreatePostPayload,
  UpdatePostPayload,
  PostListResponse,
  
  // Tag Types
  Tag,
  TagListResponse,
  
  // User Types
  UserListResponse,
  
  // Notification Types
  Notification,
  NotificationListResponse,
  
  // Search Types
  SearchResponse,
  
  // Webhook Types
  Webhook,
  WebhookListResponse,
  
  // Stats Types
  StatsResponse,
  
  // Integration Types
  Integration,
  IntegrationListResponse,
  
  // Private Message Types
  PrivateMessage,
  PrivateMessageListResponse,
  
  // Report Types
  Report,
  ReportListResponse,
  
  // Role Types
  Role,
  RoleListResponse,
  
  // SSO Types
  SSOProvider,
  SSOProviderListResponse,
  
  // Utility Types
  PaginatedResponse,
  InteractionType
} from '@foru-ms/sdk';
```

## Error Handling

All methods return a Promise. If the API returns a non-200 status, the Promise rejects with an Error object containing the server message.

```typescript
try {
  await client.threads.create({ ... });
} catch (err: any) {
  console.error("Error creating thread:", err.message);
}
```

## License

MIT
