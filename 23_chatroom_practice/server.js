const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

// http server
const server = http.createServer(app);
// socket server
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/chat', (req, res) => {
  res.render('chat');
});

io.on('connection', (socket) => {
  socket.on('join', (chatroom) => {
    socket.room = chatroom;
    socket.join(chatroom);
    console.log('rooms', socket.rooms);
    socket.broadcast.to(chatroom).emit('userjoin', chatroom);
  });
  socket.on('message', (message) => {
    io.to(socket.room).emit('chat', { message: message, senderId: socket.id });
  });
});
// server open
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
