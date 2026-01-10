# Reference
## Auth
<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">register</a>({ ...params }) -> Forum.PostAuthRegisterResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.register({
    username: "username",
    email: "email",
    password: "password"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostAuthRegisterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">login</a>({ ...params }) -> Forum.PostAuthLoginResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.login({
    login: "login",
    password: "password"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostAuthLoginRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">getCurrentUser</a>() -> Forum.GetAuthMeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.getCurrentUser();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">requestPasswordReset</a>({ ...params }) -> Forum.PostAuthForgotPasswordResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.requestPasswordReset({
    email: "email"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostAuthForgotPasswordRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">resetPassword</a>({ ...params }) -> Forum.PostAuthResetPasswordResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.resetPassword({
    password: "password"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostAuthResetPasswordRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tags
<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">listAllTags</a>({ ...params }) -> Forum.GetTagsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.listAllTags();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetTagsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">createATag</a>({ ...params }) -> Forum.PostTagsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.createATag({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostTagsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">getATag</a>({ ...params }) -> Forum.GetTagsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.getATag({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetTagsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">deleteATag</a>({ ...params }) -> Forum.DeleteTagsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.deleteATag({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteTagsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">updateATag</a>({ ...params }) -> Forum.PatchTagsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.updateATag({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PatchTagsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">listTagSubscribers</a>({ ...params }) -> Forum.GetTagsIdSubscribersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.listTagSubscribers({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetTagsIdSubscribersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">getASubscriberFromTag</a>({ ...params }) -> Forum.GetTagsIdSubscribersSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.getASubscriberFromTag({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetTagsIdSubscribersSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">deleteASubscriberFromTag</a>({ ...params }) -> Forum.DeleteTagsIdSubscribersSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.deleteASubscriberFromTag({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteTagsIdSubscribersSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Threads
<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">listAllThreads</a>({ ...params }) -> Forum.GetThreadsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.listAllThreads();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetThreadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">createAThread</a>({ ...params }) -> Forum.PostThreadsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.createAThread({
    title: "title",
    body: "body"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostThreadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">getAThread</a>({ ...params }) -> Forum.GetThreadsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.getAThread({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetThreadsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">deleteAThread</a>({ ...params }) -> Forum.DeleteThreadsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.deleteAThread({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteThreadsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">updateAThread</a>({ ...params }) -> Forum.PatchThreadsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.updateAThread({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PatchThreadsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">listThreadPosts</a>({ ...params }) -> Forum.GetThreadsIdPostsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.listThreadPosts({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetThreadsIdPostsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">getAPostFromThread</a>({ ...params }) -> Forum.GetThreadsIdPostsSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.getAPostFromThread({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetThreadsIdPostsSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">deleteAPostFromThread</a>({ ...params }) -> Forum.DeleteThreadsIdPostsSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.deleteAPostFromThread({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteThreadsIdPostsSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">listThreadReactions</a>({ ...params }) -> Forum.GetThreadsIdReactionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.listThreadReactions({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetThreadsIdReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">createAReactionInThread</a>({ ...params }) -> Forum.PostThreadsIdReactionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.createAReactionInThread({
    id: "id",
    type: "LIKE"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostThreadsIdReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">removeYourReactionFromThread</a>({ ...params }) -> Forum.DeleteThreadsIdReactionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes the authenticated user's reaction. No subId needed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.removeYourReactionFromThread({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteThreadsIdReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">getAReactionFromThread</a>({ ...params }) -> Forum.GetThreadsIdReactionsSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.getAReactionFromThread({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetThreadsIdReactionsSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">deleteAReactionFromThread</a>({ ...params }) -> Forum.DeleteThreadsIdReactionsSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.deleteAReactionFromThread({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteThreadsIdReactionsSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">listThreadSubscribers</a>({ ...params }) -> Forum.GetThreadsIdSubscribersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.listThreadSubscribers({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetThreadsIdSubscribersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">getASubscriberFromThread</a>({ ...params }) -> Forum.GetThreadsIdSubscribersSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.getASubscriberFromThread({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetThreadsIdSubscribersSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">deleteASubscriberFromThread</a>({ ...params }) -> Forum.DeleteThreadsIdSubscribersSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.deleteASubscriberFromThread({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteThreadsIdSubscribersSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">getThreadPoll</a>({ ...params }) -> Forum.GetThreadsIdPollResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.getThreadPoll({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetThreadsIdPollRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">createThreadPoll</a>({ ...params }) -> Forum.PostThreadsIdPollResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.createThreadPoll({
    id: "id",
    title: "title",
    options: [{
            title: "title"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostThreadsIdPollRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">updateThreadPoll</a>({ ...params }) -> Forum.PatchThreadsIdPollResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.updateThreadPoll({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PatchThreadsIdPollRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Posts
<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">listAllPosts</a>({ ...params }) -> Forum.GetPostsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.listAllPosts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPostsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">createAPost</a>({ ...params }) -> Forum.PostPostsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.createAPost({
    threadId: "threadId",
    body: "body"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostPostsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">getAPost</a>({ ...params }) -> Forum.GetPostsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.getAPost({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPostsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">deleteAPost</a>({ ...params }) -> Forum.DeletePostsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.deleteAPost({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeletePostsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">updateAPost</a>({ ...params }) -> Forum.PatchPostsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.updateAPost({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PatchPostsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">listPostReactions</a>({ ...params }) -> Forum.GetPostsIdReactionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.listPostReactions({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPostsIdReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">createAReactionInPost</a>({ ...params }) -> Forum.PostPostsIdReactionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.createAReactionInPost({
    id: "id",
    type: "LIKE"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostPostsIdReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">removeYourReactionFromPost</a>({ ...params }) -> Forum.DeletePostsIdReactionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes the authenticated user's reaction. No subId needed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.removeYourReactionFromPost({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeletePostsIdReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">getAReactionFromPost</a>({ ...params }) -> Forum.GetPostsIdReactionsSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.getAReactionFromPost({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPostsIdReactionsSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">deleteAReactionFromPost</a>({ ...params }) -> Forum.DeletePostsIdReactionsSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.deleteAReactionFromPost({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeletePostsIdReactionsSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">listPostPosts</a>({ ...params }) -> Forum.GetPostsIdPostsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.listPostPosts({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPostsIdPostsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">getAPostFromPost</a>({ ...params }) -> Forum.GetPostsIdPostsSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.getAPostFromPost({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPostsIdPostsSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.posts.<a href="/src/api/resources/posts/client/Client.ts">deleteAPostFromPost</a>({ ...params }) -> Forum.DeletePostsIdPostsSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.posts.deleteAPostFromPost({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeletePostsIdPostsSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PrivateMessages
<details><summary><code>client.privateMessages.<a href="/src/api/resources/privateMessages/client/Client.ts">listAllPrivateMessages</a>({ ...params }) -> Forum.GetPrivateMessagesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.privateMessages.listAllPrivateMessages();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPrivateMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PrivateMessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.privateMessages.<a href="/src/api/resources/privateMessages/client/Client.ts">createAPrivateMessage</a>({ ...params }) -> Forum.PostPrivateMessagesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.privateMessages.createAPrivateMessage({
    recipientId: "recipientId",
    body: "body"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostPrivateMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PrivateMessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.privateMessages.<a href="/src/api/resources/privateMessages/client/Client.ts">getAPrivateMessage</a>({ ...params }) -> Forum.GetPrivateMessagesIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.privateMessages.getAPrivateMessage({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPrivateMessagesIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PrivateMessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.privateMessages.<a href="/src/api/resources/privateMessages/client/Client.ts">deleteAPrivateMessage</a>({ ...params }) -> Forum.DeletePrivateMessagesIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.privateMessages.deleteAPrivateMessage({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeletePrivateMessagesIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PrivateMessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.privateMessages.<a href="/src/api/resources/privateMessages/client/Client.ts">listPrivateMessageReplies</a>({ ...params }) -> Forum.GetPrivateMessagesIdRepliesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.privateMessages.listPrivateMessageReplies({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPrivateMessagesIdRepliesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PrivateMessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.privateMessages.<a href="/src/api/resources/privateMessages/client/Client.ts">createAReplieInPrivateMessage</a>({ ...params }) -> Forum.PostPrivateMessagesIdRepliesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.privateMessages.createAReplieInPrivateMessage({
    id: "id",
    recipientId: "recipientId",
    body: "body"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostPrivateMessagesIdRepliesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PrivateMessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.privateMessages.<a href="/src/api/resources/privateMessages/client/Client.ts">getAReplieFromPrivateMessage</a>({ ...params }) -> Forum.GetPrivateMessagesIdRepliesSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.privateMessages.getAReplieFromPrivateMessage({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetPrivateMessagesIdRepliesSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PrivateMessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.privateMessages.<a href="/src/api/resources/privateMessages/client/Client.ts">deleteAReplieFromPrivateMessage</a>({ ...params }) -> Forum.DeletePrivateMessagesIdRepliesSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.privateMessages.deleteAReplieFromPrivateMessage({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeletePrivateMessagesIdRepliesSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PrivateMessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users
<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listAllUsers</a>({ ...params }) -> Forum.GetUsersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listAllUsers();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getAUser</a>({ ...params }) -> Forum.GetUsersIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getAUser({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetUsersIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">deleteAUser</a>({ ...params }) -> Forum.DeleteUsersIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.deleteAUser({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteUsersIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">updateAUser</a>({ ...params }) -> Forum.PatchUsersIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.updateAUser({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PatchUsersIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listUserFollowers</a>({ ...params }) -> Forum.GetUsersIdFollowersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listUserFollowers({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetUsersIdFollowersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getAFollowerFromUser</a>({ ...params }) -> Forum.GetUsersIdFollowersSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getAFollowerFromUser({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetUsersIdFollowersSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">deleteAFollowerFromUser</a>({ ...params }) -> Forum.DeleteUsersIdFollowersSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.deleteAFollowerFromUser({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteUsersIdFollowersSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listUserFollowing</a>({ ...params }) -> Forum.GetUsersIdFollowingResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listUserFollowing({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetUsersIdFollowingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getAFollowingFromUser</a>({ ...params }) -> Forum.GetUsersIdFollowingSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getAFollowingFromUser({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetUsersIdFollowingSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">deleteAFollowingFromUser</a>({ ...params }) -> Forum.DeleteUsersIdFollowingSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.deleteAFollowingFromUser({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteUsersIdFollowingSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Roles
<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">listAllRoles</a>({ ...params }) -> Forum.GetRolesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.listAllRoles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetRolesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">createARole</a>({ ...params }) -> Forum.PostRolesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.createARole({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostRolesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">getARole</a>({ ...params }) -> Forum.GetRolesIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.getARole({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetRolesIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">deleteARole</a>({ ...params }) -> Forum.DeleteRolesIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.deleteARole({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteRolesIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">updateARole</a>({ ...params }) -> Forum.PatchRolesIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.updateARole({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PatchRolesIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Reports
<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">listAllReports</a>({ ...params }) -> Forum.GetReportsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.listAllReports();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">createAReport</a>({ ...params }) -> Forum.PostReportsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.createAReport({
    type: "type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">getAReport</a>({ ...params }) -> Forum.GetReportsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.getAReport({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetReportsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reports.<a href="/src/api/resources/reports/client/Client.ts">deleteAReport</a>({ ...params }) -> Forum.DeleteReportsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reports.deleteAReport({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteReportsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Notifications
<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">listAllNotifications</a>({ ...params }) -> Forum.GetNotificationsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.listAllNotifications();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetNotificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">createANotification</a>({ ...params }) -> Forum.PostNotificationsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.createANotification({
    userId: "userId",
    type: "type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostNotificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">getANotification</a>({ ...params }) -> Forum.GetNotificationsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.getANotification({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetNotificationsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">deleteANotification</a>({ ...params }) -> Forum.DeleteNotificationsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.deleteANotification({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteNotificationsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">updateANotification</a>({ ...params }) -> Forum.PatchNotificationsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.updateANotification({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PatchNotificationsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Webhooks
<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">listAllWebhooks</a>({ ...params }) -> Forum.GetWebhooksResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.listAllWebhooks();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">createAWebhook</a>({ ...params }) -> Forum.PostWebhooksResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.createAWebhook({
    name: "name",
    url: "url",
    events: ["events"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">getAWebhook</a>({ ...params }) -> Forum.GetWebhooksIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.getAWebhook({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetWebhooksIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">deleteAWebhook</a>({ ...params }) -> Forum.DeleteWebhooksIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.deleteAWebhook({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteWebhooksIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">listWebhookDeliveries</a>({ ...params }) -> Forum.GetWebhooksIdDeliveriesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.listWebhookDeliveries({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetWebhooksIdDeliveriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">getADeliverieFromWebhook</a>({ ...params }) -> Forum.GetWebhooksIdDeliveriesSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.getADeliverieFromWebhook({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetWebhooksIdDeliveriesSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">deleteADeliverieFromWebhook</a>({ ...params }) -> Forum.DeleteWebhooksIdDeliveriesSubIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.deleteADeliverieFromWebhook({
    id: "id",
    subId: "subId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteWebhooksIdDeliveriesSubIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Integrations
<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">listAllIntegrations</a>({ ...params }) -> Forum.GetIntegrationsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.listAllIntegrations();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetIntegrationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">createAnIntegration</a>({ ...params }) -> Forum.PostIntegrationsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.createAnIntegration({
    type: "type",
    config: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostIntegrationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">getAnIntegration</a>({ ...params }) -> Forum.GetIntegrationsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.getAnIntegration({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetIntegrationsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">deleteAnIntegration</a>({ ...params }) -> Forum.DeleteIntegrationsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.deleteAnIntegration({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteIntegrationsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">updateAnIntegration</a>({ ...params }) -> Forum.PatchIntegrationsIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.updateAnIntegration({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PatchIntegrationsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IntegrationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SsOs
<details><summary><code>client.ssOs.<a href="/src/api/resources/ssOs/client/Client.ts">listAllSsOs</a>({ ...params }) -> Forum.GetSsoResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ssOs.listAllSsOs();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetSsoRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SsOsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ssOs.<a href="/src/api/resources/ssOs/client/Client.ts">createAnSso</a>({ ...params }) -> Forum.PostSsoResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ssOs.createAnSso({
    name: "name",
    clientId: "clientId",
    clientSecret: "clientSecret",
    issuer: "issuer",
    authorizationEndpoint: "authorizationEndpoint",
    tokenEndpoint: "tokenEndpoint",
    userInfoEndpoint: "userInfoEndpoint"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PostSsoRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SsOsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ssOs.<a href="/src/api/resources/ssOs/client/Client.ts">getAnSso</a>({ ...params }) -> Forum.GetSsoIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ssOs.getAnSso({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.GetSsoIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SsOsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ssOs.<a href="/src/api/resources/ssOs/client/Client.ts">deleteAnSso</a>({ ...params }) -> Forum.DeleteSsoIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ssOs.deleteAnSso({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.DeleteSsoIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SsOsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ssOs.<a href="/src/api/resources/ssOs/client/Client.ts">updateAnSso</a>({ ...params }) -> Forum.PatchSsoIdResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ssOs.updateAnSso({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Forum.PatchSsoIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SsOsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
