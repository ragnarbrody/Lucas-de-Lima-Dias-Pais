# Specification: Scoreboard Update API Module

## 1. Introduction
This document provides the technical specification for the Scoreboard Update API Module, designed to handle the real-time update of a user scoreboard and prevent malicious score manipulation. This module is part of the backend architecture for an online game (or other score source) that updates a scoreboard upon completion of a user action.

## 2. Objectives
The primary objective of this module is to manage user scores, ensuring:

Real-time updates to a top 10 scoreboard.
Secure and authenticated score submissions.
Prevention of unauthorized score manipulation.

## 3. Assumptions
Users can perform a predefined action (e.g., playing a game) which will increase their score.
Scores will always be integers.
The number of users will be significantly larger than the number of users displayed on the scoreboard (top 10).
The API will handle a high number of concurrent users submitting scores.
All actions that modify the score will be authenticated and authorized.

## 4. API Endpoints

### 4.1 POST /score
This endpoint will be responsible for updating a user’s score.

**Request:**

- - Method: POST

- - URL: /score

- - Headers:
Authorization: Bearer <token> (JSON Web Token (Base64) or another token type for user authentication)

- - Body (JSON):
```json
{
  "userId": "<string>",
  "score": "<integer>"
}
```

**Response:**
Success (200):
```json
{
  "message": "Score updated successfully"
}
```
Error (400/401):
```json
{
  "message": "Invalid score or unauthorized attempt to modify score."
}
```

- - Logic:
- Authenticate user via token.
- Validate score (must be a positive integer).
- Retrieve the user's current score and update it.
- Check if the user's score qualifies for the top 10 leaderboard.
- If yes, update the scoreboard and notify all clients in real-time.
- If no, only update the user's score.

### 4.2 GET /leaderboard
This endpoint will retrieve the current top 10 user scores.

**Request:**

- - Method: GET

- - URL: /leaderboard

**Response(JSON):**
```json
[
  { "userId": "<string>", "score": <integer> },
  { "userId": "<string>", "score": <integer> },
  ...
]
```

## 5. Database Schema

### 5.1 User Table
- id: Unique identifier for each user (Primary Key).
- username: The username of the player.
- score: The current score of the user.

### 5.2 Leaderboard Table
- id: Auto-increment identifier (Primary Key).
- userId: Foreign key referring to the User table (FK).
- score: The score that qualifies for the leaderboard.
- timestamp: Time when the score was updated.

## 6. Data Flow Diagram
A simplified diagram illustrating the flow of data:

- User Action: The user completes an action (e.g., playing a game) and their score increases.
- API Call: The client sends an authenticated request to the /score endpoint.
- Score Validation: The backend verifies the score and updates the user's score in the database.
- Leaderboard Update: If the score qualifies for the top 10 leaderboard, it is updated.
- Real-time Notification: The updated leaderboard is sent to all connected clients.

[Flowchart](./diagrams/Flowchart.jpg) 
**There is also an PDF version of the flowchart**

## 7. Security Measures

### 7.1 Authentication & Authorization
Use JWT (JSON Web Token) or OAuth2 for authentication.
Ensure each score submission is tied to a valid user session.

### 7.2 Anti-cheat Mechanisms
Implement server-side validation of actions before updating scores.
Use rate-limiting to prevent rapid or malicious requests.
Monitor abnormal score updates (e.g., sudden huge increases).

## 8. Performance Considerations
- Caching: Utilize in-memory caching (like Redis) to store the top 10 leaderboard for fast access and it would mantain the resource access to other function faster.
- Concurrency: The system must handle concurrent updates without introducing race conditions.
- Scaling: Use database indexes on the score column to optimize leaderboard queries.

## 9. Future Improvements
- Pagination: Allow for pagination of the leaderboard if a larger list is needed.
- Game Integration: Introduce WebSocket support for real-time score updates across multiple clients.
- Historical Data: Track score histories for individual users for analytics or leaderboards based on specific timeframes (e.g., weekly scores).

## 10. Conclusion
This module provides a secure and scalable approach to updating user scores and maintaining a real-time top 10 leaderboard. With the API architecture in place, the system can handle thousands of concurrent users while preventing unauthorized score manipulation.