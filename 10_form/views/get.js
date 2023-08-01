const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("get");
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("get_result", {
    title: "GET 요청 폼 결과 확인",
    userInfo: req.query,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
