const express = require("express");
const app = express();
const path = 8000;
// const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

// app.use("public", express.static("./public"));
app.use("public", express.static("./public"));

app.get("/", (req, res) => {
  res.render("caterpillar");
});

const port = 8000;
app.listen(port, () => {
  console.log("서버가 ${port}번 포트에서 실행 중입니다.");
});

console.log(express);
