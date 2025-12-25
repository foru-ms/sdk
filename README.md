# @foru-ms/sdk

The official JavaScript/ TypeScript SDK for [Foru.ms](https://foru.ms). Build powerful community features directly into your application.

This SDK is fully typed and provides a comprehensive interface to the Foru.ms API with built-in error handling, automatic retries, and pagination helpers.

## Features

**Fully Typed** - Complete TypeScript support with detailed type definitions  
**Auto Retry** - Automatic retry logic for rate limits and server errors  
**Easy Pagination** - Built-in helpers for cursor-based pagination  
**Rich Error Classes** - Specific error types for better error handling  
**Webhook Verification** - Built-in signature verification for webhooks  
**Rate Limit Tracking** - Automatic tracking of API rate limits  
**Comprehensive Examples** - Detailed examples for common use cases

## Installation

```bash
npm install @foru-ms/sdk
# or
yarn add @foru-ms/sdk
# or
pnpm add @foru-ms/sdk
```

## Quick Start

```typescript
import { ForumClient } from '@foru-ms/sdk';

const client = new ForumClient({
  apiKey: 'your_api_key',
  baseUrl: 'https://api.foru.ms/v1', // Optional
  maxRetries: 3, // Optional, default: 3
  enableRetry: true, // Optional, default: true
});

// Set an authentication token (JWT) for user-scoped requests
client.setToken('user_jwt_token');

// Create a thread
const thread = await client.threads.create({
  title: 'My First Thread',
  body: 'Hello, Foru.ms!',
  userId: 'user-123',
});

// List threads with auto-pagination
for await (const thread of client.pagination.paginateAll(
  (cursor) => client.threads.list({ cursor })
)) {
  console.log(thread.title);
}
```

## Error Handling

The SDK provides specific error classes for different scenarios:

```typescript
import {
  ForumClient,
  AuthenticationError,
  NotFoundError,
  RateLimitError,
  ValidationError
} from '@foru-ms/sdk';

try {
  await client.threads.retrieve('thread-id');
} catch (error) {
  if (error instanceof NotFoundError) {
    console.log('Thread not found');
  } else if (error instanceof RateLimitError) {
    console.log('Rate limited, retry after:', error.retryAfter);
  } else if (error instanceof AuthenticationError) {
    console.log('Authentication failed');
  }
}
```

**Available Error Classes:**
- `ForumAPIError` - Base class for all API errors
- `AuthenticationError` - 401 errors
- `AuthorizationError` - 403 errors
- `NotFoundError` - 404 errors
- `ValidationError` - 422 errors
- `RateLimitError` - 429 errors
- `ServerError` - 5xx errors
- `NetworkError` - Network/connection errors

## Pagination

The SDK provides multiple ways to handle pagination:

```typescript
// Auto-pagination with async iterator
for await (const thread of client.pagination.paginateAll(
  (cursor) => client.threads.list({ cursor, filter: 'newest' })
)) {
  console.log(thread.title);
}

// Fetch all pages at once
const allThreads = await client.pagination.fetchAllPages(
  (cursor) => client.threads.list({ cursor }),
  5 // max pages
);

// Manual pagination
let cursor: string | undefined;
do {
  const response = await client.threads.list({ cursor });
  // Process threads...
  cursor = response.nextThreadCursor;
} while (cursor);
```

## Webhooks

Verify webhook signatures for security. All webhooks include:
- `X-Webhook-Signature`: HMAC-SHA256 signature
- `X-Webhook-Timestamp`: Unix timestamp (milliseconds)
- `X-Webhook-Event`: Event type

```typescript
app.post('/webhooks/foru', (req, res) => {
  const signature = req.headers['x-webhook-signature'];
  const timestamp = req.headers['x-webhook-timestamp'];
  const event = req.headers['x-webhook-event'];
  
  // Verify signature with timestamp (prevents replay attacks)
  const isValid = client.webhooks.verifySignature(
    req.body,
    signature,
    timestamp,
    'your_webhook_secret'
  );

  if (!isValid) {
    return res.status(401).send('Invalid signature');
  }

  // Process webhook...
  console.log('Event:', event);
  res.send('OK');
});
```

## Rate Limiting

Track rate limit information automatically:

```typescript
await client.threads.list();

if (client.lastRateLimitInfo) {
  console.log('Limit:', client.lastRateLimitInfo.limit);
  console.log('Remaining:', client.lastRateLimitInfo.remaining);
  console.log('Resets at:', new Date(client.lastRateLimitInfo.reset * 1000));
}
```

## Examples

Check the `/examples` directory for detailed examples:

- [Authentication](./examples/authentication.ts) - Login, registration, token management
- [Managing Threads](./examples/managing-threads.ts) - CRUD operations, polls, interactions
- [Pagination](./examples/pagination.ts) - Different pagination strategies
- [Error Handling](./examples/error-handling.ts) - Comprehensive error handling
- [Webhooks](./examples/webhooks.ts) - Setup and verification



## API Reference

### Auth (`client.auth`)

*   `login(payload: { login: string; password: string })`: Login a user. Returns `{ token: string }`.
*   `register(payload: RegisterPayload)`: Register a new user.
*   `me()`: Get specific details of the currently authenticated user.
*   `forgotPassword(email: string)`: Initiate password reset flow.
*   `resetPassword(payload: { password: string; oldPassword?: string; email?: string; token?: string })`: Reset password using token or old password.
*   `getSecurity()`: Get account security information for the authenticated user. Returns IP addresses, registration date, last seen timestamp, and verification status. **Requires authentication token.**

### Threads (`client.threads`)

**Thread Management**
*   `list(params: { query?: string; tagId?: string; filter?: 'newest' | 'oldest'; type?: 'created' | 'liked' | 'disliked' | 'upvoted' | 'downvoted' | 'subscribed'; cursor?: string; userId?: string })`: List threads with filtering options.
*   `create(payload: CreateThreadPayload)`: Create a new thread.
*   `retrieve(id: string)`: Get a thread by ID.
*   `update(id: string, payload: UpdateThreadPayload)`: Update a thread.
*   `delete(id: string)`: Delete a thread.
*   `getPosts(id: string, params: { query?: string; cursor?: string; filter?: 'newest' | 'oldest' })`: Get posts in a thread.

**Thread Interactions**
*   `like(id: string, userId?: string, extendedData?: any)`: Like a thread.
*   `unlike(id: string, userId?: string)`: Unlike a thread.
*   `getLikes(id: string, params?: { cursor?: string })`: Get users who liked a thread with pagination.
*   `dislike(id: string, userId?: string, extendedData?: any)`: Dislike a thread.
*   `undislike(id: string, userId?: string)`: Remove dislike from a thread.
*   `getDislikes(id: string, params?: { cursor?: string })`: Get users who disliked a thread with pagination.
*   `upvote(id: string, userId?: string, extendedData?: any)`: Upvote a thread.
*   `unupvote(id: string, userId?: string)`: Remove upvote from a thread.
*   `getUpvotes(id: string, params?: { cursor?: string })`: Get users who upvoted a thread with pagination.
*   `downvote(id: string, userId?: string, extendedData?: any)`: Downvote a thread.
*   `undownvote(id: string, userId?: string)`: Remove downvote from a thread.
*   `getDownvotes(id: string, params?: { cursor?: string })`: Get users who downvoted a thread with pagination.

**Thread Subscriptions**
*   `subscribe(id: string, userId?: string, extendedData?: any)`: Subscribe to a thread.
*   `unsubscribe(id: string, userId?: string)`: Unsubscribe from a thread.
*   `getSubscribers(id: string, params?: { cursor?: string })`: Get users subscribed to a thread with pagination.

**Thread Polls**
*   `createPoll(id: string, payload: { title?: string; expiresAt?: string; options: Array<{ title: string; color?: string; extendedData?: any }>, extendedData?: any })`: Create a poll for a thread.
*   `getPoll(id: string)`: Get poll details and configuration.
*   `updatePoll(id: string, payload: { title?: string; expiresAt?: string; closed?: boolean; options?: Array<{ id?: string; title?: string; color?: string; extendedData?: any }>; extendedData?: any })`: Update poll configuration.
*   `deletePoll(id: string)`: Delete a poll from a thread.
*   `getPollResults(id: string, userId?: string)`: Get poll results with vote counts.
*   `vote(id: string, userId?: string, optionId: string)`: Cast a vote in a thread poll.
*   `voteUpdate(id: string, userId?: string, optionId: string)`: Change an existing vote.
*   `unvote(id: string, userId?: string)`: Remove your vote from a poll.

### Posts (`client.posts`)

**Post Management**
*   `list(params: { query?: string; filter?: 'newest' | 'oldest'; type?: 'created' | 'liked' | 'disliked' | 'upvoted' | 'downvoted'; cursor?: string; userId?: string })`: List posts with filtering options.
*   `create(payload: CreatePostPayload)`: Create a new post/reply.
*   `retrieve(id: string)`: Get a post by ID.
*   `update(id: string, payload: UpdatePostPayload)`: Update a post.
*   `delete(id: string, payload?: { userId?: string })`: Delete a post.
*   `getChildren(id: string, params?: { query?: string; cursor?: string; filter?: 'newest' | 'oldest' })`: Get child posts (nested replies).

**Post Interactions**
*   `like(id: string, userId?: string, extendedData?: any)`: Like a post.
*   `unlike(id: string, userId?: string)`: Unlike a post.
*   `getLikes(id: string, params?: { cursor?: string })`: Get users who liked a post with pagination.
*   `dislike(id: string, userId?: string, extendedData?: any)`: Dislike a post.
*   `undislike(id: string, userId?: string)`: Remove dislike from a post.
*   `getDislikes(id: string, params?: { cursor?: string })`: Get users who disliked a post with pagination.
*   `upvote(id: string, userId?: string, extendedData?: any)`: Upvote a post.
*   `unupvote(id: string, userId?: string)`: Remove upvote from a post.
*   `getUpvotes(id: string, params?: { cursor?: string })`: Get users who upvoted a post with pagination.
*   `downvote(id: string, userId?: string, extendedData?: any)`: Downvote a post.
*   `undownvote(id: string, userId?: string)`: Remove downvote from a post.
*   `getDownvotes(id: string, params?: { cursor?: string })`: Get users who downvoted a post with pagination.

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
*   `follow(id: string, followerId?: string, extendedData?: any)`: Follow a user.
*   `unfollow(id: string, followerId?: string)`: Unfollow a user.


### Tags (`client.tags`)

*   `list(params?: { query?: string; cursor?: string })`: List all tags.
*   `listSubscribed(params: { userId?: string; query?: string; cursor?: string })`: List tags a user is subscribed to.
*   `create(payload: { name: string; description?: string; color?: string; extendedData?: Record<string, any> })`: Create a tag.
*   `retrieve(id: string, params?: { userId?: string })`: Get a tag with optional user context.
*   `update(id: string, payload: { name?: string; description?: string; color?: string; extendedData?: Record<string, any> })`: Update a tag.
*   `delete(id: string)`: Delete a tag.
*   `getThreads(id: string, params?: { query?: string; cursor?: string; filter?: 'newest' | 'oldest' })`: Get all threads with a specific tag.
*   `subscribe(id: string, userId?: string)`: Subscribe to a tag.
*   `unsubscribe(id: string, userId?: string)`: Unsubscribe from a tag.
*   `getSubscribers(id: string, params?: { cursor?: string })`: Get users subscribed to a tag with pagination.


### Notifications (`client.notifications`)

*   `list(params: { userId?: string; read?: boolean; filter?: 'newest' | 'oldest'; cursor?: string })`: List notifications for a user.
*   `create(payload: { threadId?: string; postId?: string; privateMessageId?: string; notifierId?: string; notifiedId: string; type: string; description?: string; extendedData?: Record<string, any> })`: Create a notification manually.
*   `retrieve(id: string, userId?: string)`: Get a notification by ID.
*   `update(id: string, payload: { userId?: string; read: boolean })`: Update a notification's read status.
*   `delete(id: string, userId?: string)`: Delete a notification.
*   `markAllAsRead(userId?: string, read?: boolean)`: Bulk update read status for all of a user's notifications. Default read status is `true`.

### Search (`client.search`)

*   `search(params: { query: string; type: 'threads' | 'posts' | 'users' | 'tags'; cursor?: string })`: Polymorphic search.

### Webhooks (`client.webhooks`)

*   `list()`: List all webhooks for your instance.
*   `create(payload: { name: string; url: string; events: string[] })`: Create a new webhook subscription.
*   `retrieve(id: string)`: Get a webhook by ID.
*   `update(id: string, payload: { name?: string; url?: string; events?: string[]; active?: boolean })`: Update a webhook configuration.
*   `delete(id: string)`: Delete a webhook.
*   `getDeliveries(id: string, params?: { cursor?: string })`: Get webhook delivery history with pagination. Track successful and failed deliveries.
*   `verifySignature(payload: any, signature: string, timestamp: string, secret: string, maxAge?: number)`: Verify webhook signature for security. Uses HMAC-SHA256. Default maxAge is 5 minutes to prevent replay attacks.

### Stats (`client.stats`)

*   `get(params?: { filter?: string; threadCursor?: string; postCursor?: string; ... })`: Get instance statistics.

### Integrations (`client.integrations`)

*   `list()`: Get all configured integrations for your instance.
*   `create(payload: { type: 'SLACK' | 'DISCORD' | 'SALESFORCE' | 'HUBSPOT' | 'OKTA' | 'AUTH0'; name: string; config: any })`: Configure a new integration (Slack, Discord, CRM, or SSO).
*   `retrieve(id: string)`: Get integration details by ID.
*   `update(id: string, payload: { name?: string; type?: string; enabled?: boolean; config?: any })`: Update an integration configuration.
*   `delete(id: string)`: Remove an integration.
*   `test(integrationId: string)`: Send a test message to verify integration is working correctly.
*   `oauthAuthorize(provider: 'hubspot' | 'salesforce')`: Initiate OAuth flow for a provider (redirects to provider).
*   `oauthCallback(provider: string, code: string, state: string)`: Handle OAuth callback from provider.

### Private Messages (`client.privateMessages`)

*   `list(params?: { query?: string; userId?: string; filter?: 'newest' | 'oldest'; cursor?: string })`: List private messages.
*   `create(payload: { title?: string; body: string; recipientId: string; senderId?: string; extendedData?: Record<string, any> })`: Send a new private message.
*   `retrieve(id: string, userId?: string)`: Get a message by ID.
*   `reply(id: string, payload: { body: string; senderId?: string; title?: string; extendedData?: Record<string, any> })`: Reply to a message thread.
*   `update(id: string, payload: { body?: string; extendedData?: Record<string, any> })`: Update a message (only sender can update).
*   `delete(id: string)`: Delete a message (participants can delete).

### Reports (`client.reports`)

*   `list(params?: { reporterId?: string; reportedId?: string; read?: boolean; cursor?: string; filter?: 'newest' | 'oldest' })`: List reports with filtering options.
*   `create(payload: { reporterId?: string; reportedId?: string; threadId?: string; postId?: string; privateMessageId?: string; type?: string; description?: string; extendedData?: Record<string, any> })`: Submit a new report.
*   `retrieve(id: string)`: Get a report by ID.
*   `update(id: string, payload: { threadId?: string; postId?: string; privateMessageId?: string; reportedId?: string; reporterId?: string; type?: string; description?: string; read?: boolean; extendedData?: Record<string, any> })`: Update report details (full update).
*   `updateStatus(id: string, read: boolean)`: Update read status of a report (partial update).
*   `batchUpdate(payload: { reportIds: string[]; read: boolean })`: Bulk update read status for multiple reports.
*   `delete(id: string)`: Delete a report.

### Roles (`client.roles`)

*   `list(params?: { filter?: 'newest' | 'oldest'; cursor?: string })`: List user roles.
*   `create(payload: { name: string; description?: string; color?: string; extendedData?: Record<string, any> })`: Create a new role.
*   `retrieve(id: string)`: Get a role by ID.
*   `update(id: string, payload: { name?: string; description?: string; color?: string; extendedData?: Record<string, any> })`: Update a role.
*   `delete(id: string)`: Delete a role.

### SSO (`client.sso`)

*   `list()`: List all SSO providers configured for your instance.
*   `create(payload: { provider: 'OKTA' | 'AUTH0' | 'SAML'; domain: string; config: any })`: Configure a new SSO provider.
*   `retrieve(id: string)`: Get SSO provider details by ID.
*   `update(id: string, payload: { name?: string; type?: 'SAML' | 'OIDC' | 'OAUTH2'; enabled?: boolean; config?: any })`: Update SSO configuration.
*   `delete(id: string)`: Remove an SSO provider.

## Types

Import all available interfaces and types directly from the package:

```typescript
import { 
  // Auth Types
  RegisterPayload,
  User,
  LoginResponse,
  SecurityInfo,
  
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
  InteractionType,
  
  // Error Classes
  ForumAPIError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  ValidationError,
  RateLimitError,
  ServerError,
  NetworkError,
  
  // Response Types
  RateLimitInfo,
  ResponseMetadata,
  APIResponse,
  InteractionListResponse,
  PollResponse,
  PollOption,
  
  // Utilities
  PaginationHelper,
  Validator,
  RetryHelper
} from '@foru-ms/sdk';
```

## Advanced Usage

### Custom Client Options

```typescript
const client = new ForumClient({
  apiKey: 'your_api_key',
  baseUrl: 'https://api.foru.ms/v1',
  maxRetries: 5,        // Increase retry attempts
  enableRetry: true,    // Enable auto-retry (default: true)
});

// Access rate limit info after any request
await client.threads.list();
console.log('Rate limit:', client.lastRateLimitInfo);

// Check authentication status
if (client.isAuthenticated()) {
  const user = await client.auth.me();
}
```

### Async Iteration for Large Datasets

```typescript
// Automatically fetch all pages
for await (const user of client.pagination.paginateAll(
  (cursor) => client.users.list({ cursor })
)) {
  await processUser(user);
  // Pagination happens automatically in the background
}
```

### Batch Operations

```typescript
// Fetch multiple items efficiently
const threadIds = ['id1', 'id2', 'id3'];
const threads = await Promise.all(
  threadIds.map(id => client.threads.retrieve(id))
);
```

## Best Practices

1. **Error Handling**: Always use try-catch with specific error types
2. **Rate Limits**: Monitor `client.lastRateLimitInfo` for API usage
3. **Webhooks**: Always verify signatures to prevent unauthorized requests
4. **Pagination**: Use async iterators for large result sets
5. **Authentication**: Store tokens securely, never in client-side code

## Troubleshooting

### Rate Limit Errors

If you encounter rate limit errors frequently, consider:
- Implementing caching for frequently accessed data
- Using pagination helpers to avoid fetching too much data
- Batching operations where possible

### Authentication Issues

- Ensure your API key is valid and active
- Check that tokens haven't expired
- Use `client.isAuthenticated()` to verify authentication status

### Webhook Verification Failures

- Verify you're using the correct webhook secret
- Check that timestamps aren't too old (default: 5 minutes)
- Ensure you're passing the raw payload object, not a string

## Contributing

We welcome contributions! Please see our contributing guidelines for more information.

## Support

- Support: https://foru.ms/support
- Documentation: https://foru.ms/docs
- Issues: https://github.com/foru-ms/sdk/issues

## Changelog

### v1.2.3
- README documentation update
- Enhanced all API reference sections with:
  - Better organization with categorized subsections (Management, Interactions, Subscriptions, Polls)
  - Corrected optional vs required parameters throughout
  - Added missing methods documentation (poll CRUD, webhook deliveries, integration OAuth, etc.)
  - Improved clarity and consistency across all resource sections
  - Added detailed descriptions for complex operations

### v1.2.2
- Added Auth resource with authentication methods
- Introduced comprehensive SDK type definitions
- Updated documentation

### v1.2.1
- README.md formatting and updates

### v1.2.0
- Added custom error classes for better error handling
- Added automatic retry logic with exponential backoff
- Added pagination helpers for easy iteration
- Added webhook signature verification
- Added new endpoints
- Enhanced documentation and examples

### v1.1.0
- Added new endpoints
- Enhanced documentation and examples

### v1.0.0
- Initial SDK release with core functionality

## License

MIT
