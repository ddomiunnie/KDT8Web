const express = require('express');
const app = express();
const PORT = 8000;

const userInfo = { id: 'kdt8', pw: '1234' };

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set('view engine', 'ejs');

//router
app.get('/', (req, res) => {
  res.render('index');
});
//post실습
app.get('/axiosPost', (req, res) => {
  res.render('post');
});
app.post('/resultPost', (req, res) => {
  //코드 실습
  console.log(req.body);
  const id = 'kdt8';
  const pw = '1234';
  if (id === req.body.username && pw === req.body.password) {
    res.send({ result: true, userInfo: req.body });
  } else {
    res.send({ result: false });
  }
});
//axios
app.get('/axios', (req, res) => {
  console.log('back', req.query);
  res.send(req.query);
});
app.post('/axios', (req, res) => {
  console.log('back', req.query);
  res.send(req.body);
});

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
