# Real-Time Collaborative Notes

![Real-Time Collaboration](https://img.shields.io/badge/Real%20Time-Collaboration-brightgreen)  
![Socket.io](https://img.shields.io/badge/Socket.io-4.7.2-blue)  
![React](https://img.shields.io/badge/React-18.2.0-blue)  
![Express](https://img.shields.io/badge/Express-4.18.2-green)  

A real-time collaborative notes application built with **Socket.io**, **React**, and **Express.js**. This application allows multiple users to join a room, collaborate on a shared note, and see real-time updates as they happen.

---

## Features

- **Real-Time Collaboration:** Multiple users can join a room and edit a shared note simultaneously.
- **Room-Based Communication:** Users can join specific rooms using a unique room ID.
- **Live User Updates:** See a list of online users in the room.
- **Instant Notifications:** Get notified when a user joins or leaves the room.
- **Persistent Notes:** Save and retrieve notes using RESTful APIs (optional).

---

## Technologies Used

- **Frontend:** React, Socket.io Client
- **Backend:** Express.js, Socket.io
- **State Management:** React Context API
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

---

## How It Works

1. **Join a Room:**
   - Enter a unique room ID in the input field and click "Join Room."
   - If the room doesn't exist, it will be created automatically.

2. **Collaborate in Real-Time:**
   - Start typing in the textarea. All users in the same room will see the updates in real time.

3. **Online Users:**
   - The application displays a list of users currently in the room.

4. **Notifications:**
   - When a user joins or leaves the room, all participants are notified.

---

## Key Concepts

### WebSockets
WebSockets enable real-time, bidirectional communication between the client and server. Unlike HTTP, WebSockets maintain a persistent connection, allowing instant data transfer.

### Rooms
Rooms are used to group sockets for targeted communication. In this application, each room represents a shared note that multiple users can edit.

### Namespaces
Namespaces allow dividing the application into separate communication channels. While not used in this project, they are useful for scaling applications.

---

## Deployment

### Backend
The backend is deployed on **Render**. Update the `socket.io-client` connection URL in the frontend to point to the deployed backend.

### Frontend
The frontend is deployed on **Vercel**. Ensure environment variables are properly configured for production.

---

## Testing

1. Open the application in multiple browser tabs.
2. Join the same room in all tabs.
3. Edit the note in one tab and observe the changes in real time across all tabs.
4. Check the list of online users and notifications when users join or leave.

---

## Future Improvements

- **Persistent Notes:** Save notes to a database (e.g., MongoDB) and retrieve them when a room is rejoined.
- **User Authentication:** Add user authentication to track users by name or email.
- **Rich Text Editing:** Implement a rich text editor for better formatting options.
- **Room History:** Display a history of notes for each room.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Socket.io](https://socket.io/) for enabling real-time communication.
- [React](https://reactjs.org/) for building the frontend.
- [Express.js](https://expressjs.com/) for the backend server.

---
