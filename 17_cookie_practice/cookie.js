const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cookieParser('abcdef'));

app.get('/', (req, res) => {
  res.render('index');
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
