const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//웹소켓 서버 접속
const wss = new ws.Server({ server });

//브라우저(클라이언트)들을 담은 변수 선언
const sockets = [];

//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
  console.log('클라이언트가 연결 되었습니다.');
  //sockets 배열에 브라우저 추가
  sockets.push(socket);

  socket.on('message', (message) => {
    //msg: {user: "any", message: "any"}
    const msg = JSON.parse(message);
    console.log(`클라이언트로부터 받은 메시지: ${msg.message}`);
    //클라이언트로 응답 메시지 전송
    //socket.send(`서버메시지: ${message}`);
    sockets.forEach((elem) => {
      elem.send(`${msg.user}: ${msg.message}`);
    });
  });
  //오류
  socket.on('error', (err) => {
    console.log('에러가 발생하였습니다.', err);
  });
  //접속종료
  socket.on('close', () => {
    console.log('클라이언트와 연결이 종료됨');
  });
});
