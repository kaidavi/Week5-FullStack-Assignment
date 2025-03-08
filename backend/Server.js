const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log('a user connected:', socket.id);

    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room ${roomId}`);
        io.to(roomId).emit('user-joined', socket.id);
    });

    socket.on('send-note', (roomId, note) => {
        io.to(roomId).emit('receive-note', note);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected:', socket.id);
    });
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});