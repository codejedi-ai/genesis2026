// Netlify Function - netlify/functions/users.ts
// TypeScript version without CORS (same domain)

import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersResponse {
  success: boolean;
  data?: User | User[];
  count?: number;
  error?: string;
  message?: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  try {
    const { httpMethod, queryStringParameters, body } = event;
    const { id } = queryStringParameters || {};

    // Mock data
    const users: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
    ];

    if (httpMethod === 'GET') {
      if (id) {
        // Get specific user by ID
        const user = users.find(u => u.id === parseInt(id));
        if (user) {
          const response: UsersResponse = {
            success: true,
            data: user
          };
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify(response)
          };
        } else {
          const response: UsersResponse = {
            success: false,
            error: 'User not found'
          };
          return {
            statusCode: 404,
            headers,
            body: JSON.stringify(response)
          };
        }
      } else {
        // Get all users
        const response: UsersResponse = {
          success: true,
          data: users,
          count: users.length
        };
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(response)
        };
      }
    } else if (httpMethod === 'POST') {
      // Create new user
      const { name, email } = body ? JSON.parse(body) : {};
      
      if (!name || !email) {
        const response: UsersResponse = {
          success: false,
          error: 'Name and email are required'
        };
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify(response)
        };
      }
      
      const newUser: User = {
        id: users.length + 1,
        name,
        email
      };
      
      const response: UsersResponse = {
        success: true,
        data: newUser,
        message: 'User created successfully'
      };
      
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(response)
      };
    } else {
      const response: UsersResponse = {
        success: false,
        error: 'Method not allowed',
        allowedMethods: ['GET', 'POST']
      };
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify(response)
      };
    }
  } catch (error) {
    const response: UsersResponse = {
      success: false,
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    };
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(response)
    };
  }
};

export { handler };
