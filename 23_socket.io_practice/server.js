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
app.get('/chat', (req, res) => {
  res.render('chat');
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
  //   [실습1]
  //   socket.on('hello', (data) => {
  //     console.log(`${data.name}: ${data.message}`);
  //     socket.emit('cbHello', { name: 'server', message: '안녕하세요' });
  //   });
  //   socket.on('study', (data) => {
  //     console.log(`${data.name}: ${data.message}`);
  //     socket.emit('cbStudy', { name: 'server', message: '공부합시다' });
  //   });
  //   socket.on('bye', (data) => {
  //     console.log(`${data.name}: ${data.message}`);
  //     socket.emit('cbBye', { name: 'server', message: '잘가 ~' });
  //   });

  //채팅방 만들기
  console.log('id', socket.id);
  socket.on('join', (chatroom) => {
    //console.log(chatroom);
    socket.room = chatroom;
    socket.join(chatroom);
    console.log('rooms', socket.rooms);
    //broadcast 포함 시 나를 제외한 전체 사용자에게 메시지 전달
    socket.broadcast.to(chatroom).emit('userjoin', chatroom);
  });
  socket.on('message', (message) => {
    //io.to(특정방).emit(이벤트): 특정방에 전체 사용자에게 메시지 전달
    io.to(socket.room).emit('chat', `${message}`);
  });
});

//server open
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
