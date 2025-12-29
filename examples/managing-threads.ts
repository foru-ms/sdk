import { ForumClient } from '@foru-ms/sdk';

/**
 * Example: Managing Threads
 * Demonstrates thread creation, updates, and interactions
 */

async function main() {
    const client = new ForumClient({
        apiKey: process.env.FORU_API_KEY || 'your_api_key',
    });

    // Set user token for authenticated actions
    client.setToken(process.env.FORU_USER_TOKEN || 'user_token');

    const userId = 'user-123';

    // Example 1: Create a Thread
    console.log('=== Creating a Thread ===');
    const newThread = await client.threads.create({
        title: 'How to use the SDK?',
        body: 'I need help getting started with the Foru.ms SDK.',
        userId,
        tags: ['help', 'sdk'],
    });
    console.log('Thread created:', newThread.id);

    // Example 2: Create a Thread with Poll
    console.log('\n=== Creating a Thread with Poll ===');
    const pollThread = await client.threads.create({
        title: 'What\'s your favorite feature?',
        body: 'Vote for your favorite SDK feature!',
        userId,
        poll: {
            title: 'Favorite Feature',
            options: [
                { title: 'Type Safety', color: '#3B82F6' },
                { title: 'Auto Pagination', color: '#10B981' },
                { title: 'Error Handling', color: '#F59E0B' },
            ],
        },
    });
    console.log('Poll thread created:', pollThread.id);

    // Example 3: Update a Thread
    console.log('\n=== Updating a Thread ===');
    const updatedThread = await client.threads.update(newThread.id, {
        title: 'How to use the SDK? [SOLVED]',
        locked: false,
        pinned: true,
    });
    console.log('Thread updated');

    // Example 4: Like a Thread
    console.log('\n=== Liking a Thread ===');
    await client.threads.like(newThread.id, userId);
    console.log('Thread liked');

    // Get likes
    const likes = await client.threads.getLikes(newThread.id);
    console.log('Total likes:', likes.count);

    // Example 5: Subscribe to a Thread
    console.log('\n=== Subscribing to Thread ===');
    await client.threads.subscribe(newThread.id, userId);
    console.log('Subscribed to thread');

    // Example 6: Vote in a Poll
    console.log('\n=== Voting in Poll ===');
    await client.threads.vote(pollThread.id, 'option-id-1', userId);
    console.log('Vote cast');

    // Get poll
    const poll = await client.threads.getPoll(pollThread.id, userId);
    console.log('Poll:', poll);

    // Get poll results
    const pollResults = await client.threads.getPollResults(pollThread.id, userId);
    console.log('Poll results:', pollResults);

    // Example 7: Add Posts to Thread
    console.log('\n=== Adding Posts ===');
    const post = await client.posts.create({
        threadId: newThread.id,
        body: 'Thanks for posting! Check out our documentation.',
    });
    console.log('Post created:', post.id);

    // Reply to the post
    const reply = await client.posts.create({
        threadId: newThread.id,
        body: 'Thank you! That helps a lot.',
        parentId: post.id, // This makes it a reply
    });
    console.log('Reply created:', reply.id);

    // Example 8: Get Thread Posts
    console.log('\n=== Getting Thread Posts ===');
    const threadPosts = await client.threads.getPosts(newThread.id, {
        filter: 'newest',
    });
    console.log('Total posts:', threadPosts.count);

    // Example 9: Upvote/Downvote Threads
    console.log('\n=== Voting on Threads ===');
    await client.threads.upvote(newThread.id, userId);
    console.log('Thread upvoted');

    const upvotes = await client.threads.getUpvotes(newThread.id);
    console.log('Total upvotes:', upvotes.count);

    // Example 10: List Threads with Filters
    console.log('\n=== Listing Threads ===');
    const threads = await client.threads.list({
        filter: 'newest',
        tagId: 'help',
        query: 'SDK',
    });
    console.log('Found threads:', threads.threads.length);

    // Example 11: Get Subscribers
    console.log('\n=== Getting Subscribers ===');
    const subscribers = await client.threads.getSubscribers(newThread.id);
    console.log('Total subscribers:', subscribers.count);

    // Example 12: Delete a Thread
    console.log('\n=== Deleting a Thread ===');
    const deleted = await client.threads.delete(newThread.id, { userId });
    console.log('Thread deleted:', deleted.deleted);
}

main().catch(console.error);
