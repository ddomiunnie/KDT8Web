const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

//http server
const server = http.createServer(app);
//socket server
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

//socket
// io.on('connection', (socket) => {
//   console.log('클라이언트 연결됨');

//   socket.on('hello', () => {
//     console.log('hello');
//     socket.emit('response', 'Hello');
//   });

//   socket.on('study', () => {
//     console.log('study');
//     socket.emit('response', 'Study');
//   });

//   socket.on('bye', () => {
//     console.log('bye');
//     socket.emit('response', 'Bye');
//   });
// });

io.on('connection', (socket) => {
  socket.on('hello', (data) => {
    console.log(`${data.name}: ${data.message}`);
    socket.emit('cbHello', { name: 'server', message: '안녕하세요' });
  });

  socket.on('study', (data) => {
    console.log(`${data.name}: ${data.message}`);
    socket.emit('cbStudy', { name: 'server', message: '공부합시다' });
  });

  socket.on('bye', (data) => {
    console.log(`${data.name}: ${data.message}`);
    socket.emit('cbBye', { name: 'server', message: '잘가 ~' });
  });
});

//server opem
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
