const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.get('/', (req, res) => {
  res.render('index');
});
//POST
app.get('/axiosPost', (req, res) => {
  res.render('post');
});
app.post('/resultPost', (req, res) => {
  console.log(req.body);
  const id = 'kdt8';
  const pw = '1234';
  if (id == req.body.username && pw === req.body.password) {
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
  console.log('back', req.body);
  res.send(req.body);
});
// 서버 연결
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
