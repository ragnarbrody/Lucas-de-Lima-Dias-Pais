# Resource Management API

This is a backend server built with Express.js and TypeScript that provides CRUD operations for managing resources.

## Prerequisites

- Node.js (v14 or later)
- MongoDB

## Configuration

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with the following content:

PORT=3200
MONGODB_URI=mongodb://localhost:27017/problem5


Note: You can change the port and database name as needed.

## Running the Application

1. Start MongoDB:
- Ensure MongoDB is running on your system
- If not already running, start it using the appropriate command for your OS

2. Start the server:

npm run dev

This will start the server using `ts-node-dev`, which will watch for file changes and automatically restart the server.

3. The server will be running on `http://localhost:3200` (or the port you specified in .env)

## Testing the API

To test the CRUD operations, you can use the provided test script:

1. Ensure the server is running
2. Open a new terminal window
3. Run the test script:

node testAPI.js

This script will create, read, update, and delete a test resource.

## API Endpoints

- POST /api/resources - Create a new resource
- GET /api/resources - List all resources (with optional category filter)
- GET /api/resources/:id - Get details of a specific resource
- PUT /api/resources/:id - Update a resource
- DELETE /api/resources/:id - Delete a resource

## Verifying Data Persistence

To verify that data is being persisted:

1. Run the test script without the delete operation (comment out the delete part in testAPI.js)
2. Use MongoDB Compass (which is the way i tested it myself) to connect to the database (usually mongodb://localhost:27017)
3. Look for the 'problem5' database and the 'resources' collection
4. You should see the created and updated resources in the collection

## Development

For development, the application uses `ts-node-dev` for hot-reloading. The `npm run dev` command starts the server in development mode, automatically restarting when files are changed.

## Troubleshooting

- If you encounter connection issues, ensure MongoDB is running and accessible
- Check the console for any error messages during server startup or API operations
- Verify that your .env file contains the correct MongoDB URI and port number