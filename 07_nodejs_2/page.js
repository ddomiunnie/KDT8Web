const express = require("express");
const app = express();

const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// 정적인 파일 불러오기
app.use(express.static("public"));

app.get("/", (req, res) => {
  //send()클라이언트에 응답 데이터를 보낼 때 사용
  //   res.send("Hello express");
  // res.send({ result: true, code: 1000, message: "회원가입에 성공하였습니다." });

  //render() 뷰 엔진 렌더링
  res.render("page");
});

app.get("/domain1", (req, res) => {
  res.render("domain1");
});

app.get("/domain2", (req, res) => {
  res.render("domain2");
});

app.get("/yorkie", (req, res) => {
  res.render("yorkie");
});

app.listen(PORT, () => {
  console.log("http://localhost:${PORT}");
});

console.log(express);
