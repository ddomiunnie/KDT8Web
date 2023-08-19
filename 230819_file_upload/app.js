const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//정적파일설정
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', (req, res) => {
  res.render('index');
});
const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      //destination: 경로 설정
      //done: 콜백 함수
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
});
//싱글 파일 업로드
app.post('/upload', uploadDetail.single('userfile'), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send('Upload!!');
});
//single method 실행이 upload 대신 uploadDetail로 만들어야 세부설정 객체가 들어감

//여러개 파일 업로드(ver1)
app.post('/upload/array', uploadDetail.array('userfiles'), function (req, res) {
  console.log(req.files);
  console.log(req.body);
  res.send('Upload Multiple Each!!');
});

//여러 개 파일 업로드 (ver2)
app.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
  function (req, res) {
    console.log(req.files);
    console.log(req.body);
    res.send('Upload Mulitiple Each!!');
  }
);
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
