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
    //웹소켓을 통해 클라이언트와 서버 간의 데이터를 주고 받을 때는 일반적으로 문자열 또는 버퍼 형태로 전달됨
    //서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요 => 버퍼를 쓰는
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
