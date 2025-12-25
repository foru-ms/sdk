import { ForumClient, AuthenticationError } from '@foru-ms/sdk';

/**
 * Example: Authentication with Foru.ms SDK
 * Demonstrates user registration, login, and token management
 */

async function main() {
    // Initialize client with API key
    const client = new ForumClient({
        apiKey: process.env.FORU_API_KEY || 'your_api_key',
    });

    try {
        // Example 1: User Registration
        console.log('=== User Registration ===');
        const newUser = await client.auth.register({
            username: 'john_doe',
            email: 'john@example.com',
            password: 'securePassword123',
            displayName: 'John Doe',
        });
        console.log('User registered:', newUser);

        // Example 2: User Login
        console.log('\n=== User Login ===');
        const loginResponse = await client.auth.login({
            login: 'john@example.com', // Can be username or email
            password: 'securePassword123',
        });
        console.log('Login successful, token:', loginResponse.token);

        // Store the token for authenticated requests
        client.setToken(loginResponse.token);

        // Example 3: Get Current User
        console.log('\n=== Get Current User ===');
        const currentUser = await client.auth.me();
        console.log('Current user:', currentUser);

        // Example 4: Password Reset Flow
        console.log('\n=== Password Reset ===');

        // Step 1: Request password reset
        await client.auth.forgotPassword('john@example.com');
        console.log('Password reset email sent');

        // Step 2: Reset password with token (received via email)
        // Note: In a real app, this would be done after user clicks the email link
        const resetToken = 'token_from_email';
        await client.auth.resetPassword({
            password: 'newSecurePassword123',
            token: resetToken,
        });
        console.log('Password reset successful');

        // Example 5: Get Account Security Information
        console.log('\n=== Account Security Info ===');
        const securityInfo = await client.auth.getSecurity();
        console.log('User ID:', securityInfo.userId);
        console.log('Username:', securityInfo.username);
        console.log('Registration IP:', securityInfo.registrationIp);
        console.log('Registration Date:', new Date(securityInfo.registrationDate).toLocaleDateString());
        console.log('Last IP:', securityInfo.lastIp);
        console.log('Last Seen:', new Date(securityInfo.lastSeenAt).toLocaleString());
        console.log('Is Online:', securityInfo.isOnline);
        console.log('Email Verified:', securityInfo.emailVerified);

        // Example 6: Check Authentication Status
        console.log('\n=== Authentication Status ===');
        console.log('Is authenticated:', client.isAuthenticated());
        console.log('Current token:', client.token);

        // Example 7: Logout (clear token)
        console.log('\n=== Logout ===');
        client.clearToken();
        console.log('Token cleared');
        console.log('Is authenticated:', client.isAuthenticated());

    } catch (error) {
        if (error instanceof AuthenticationError) {
            console.error('Authentication failed:', error.message);
            console.error('Status code:', error.statusCode);
        } else {
            console.error('An error occurred:', error);
        }
    }
}

// Run the example
main().catch(console.error);
