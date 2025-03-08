import React, { useState, useContext, useEffect } from 'react';
import { SocketContext, socket } from './SocketContext';

const App = () => {
    const [roomId, setRoomId] = useState('');
    const [note, setNote] = useState('');
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        socket.on('receive-note', (updatedNote) => {
            setNote(updatedNote);
        });

        socket.on('user-joined', (userId) => {
            setOnlineUsers((prevUsers) => [...prevUsers, userId]);
        });

        return () => {
            socket.off('receive-note');
            socket.off('user-joined');
        };
    }, []);

    const joinRoom = () => {
        if (roomId) {
            socket.emit('join-room', roomId);
        }
    };

    const handleNoteChange = (e) => {
        const updatedNote = e.target.value;
        setNote(updatedNote);
        socket.emit('send-note', roomId, updatedNote);
    };

    return (
        <SocketContext.Provider value={socket}>
            <div>
                <h1>Real-Time Collaborative Notes</h1>
                <input
                    type="text"
                    placeholder="Enter Room ID"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                />
                <button onClick={joinRoom}>Join Room</button>
                <textarea
                    value={note}
                    onChange={handleNoteChange}
                    placeholder="Start typing your note..."
                />
                <div>
                    <h3>Online Users:</h3>
                    <ul>
                        {onlineUsers.map((user, index) => (
                            <li key={index}>{user}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </SocketContext.Provider>
    );
};

export default App;