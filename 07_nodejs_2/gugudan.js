const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs"); // EJS 템플릿 엔진 설정
app.set("views", "./views"); // EJS 템플릿 파일들이 위치하는 폴더 설정

app.get("/", (req, res) => {
  res.render("gugudan", { data: [1, 2, 3, 4, 5, 6, 7, 8, 9] }); // gugudan.ejs 템플릿을 렌더링
});

app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});
