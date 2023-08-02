const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');
//정적파일설정
app.use('/uploads', express.static(__dirname + '/uploads'));
//multer setting
const upload = multer({
  //dest: 업로드할 파일을 저장할 경로를 지정
  dest: 'uploads/',
});
const uploadDetail = multer({
  //storage: 저장할 공간에 대한 정보
  //diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 1 },
});
app.get('/', (req, res) => {
  res.render('index');
});
app.post('/postResult', uploadDetail.single('dynamic-userfile'), (req, res) => {
  const userInfo = req.body;
  const file = req.file;
  res.render('result', { file: req.file });
});
//동적
app.post(
  '/dynamicFile',
  uploadDetail.single('dynamic-userfile'),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
