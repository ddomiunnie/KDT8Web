const commentsModel = require('../model/Model');

const main = (req, res) => {
  res.render('index');
};

const comments = (req, res) => {
  res.render('comments', { lists: commentsModel });
};

const comment = (req, res) => {
  console.log(req.params);
  res.render('comment', { data: commentsModel[Number(req.params.index) - 1] });
};

module.exports = {
  main: main,
  comments,
  comment,
};

// //모듈 사용 방법
// //방법1
// const test = () => {};
// module.exports = test;
// //방법2
// module.exports.test2 = '함수, 변수 등 모두 사용';
// exports.test2 = ''; // 생략형
