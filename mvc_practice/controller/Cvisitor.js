const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // console.log(Visitor.getVisitors());
  // res.render('visitor', { data: Visitor.getVisitors() });

  // mysql 연결 후
  Visitor.getVisitors((result) => {
    console.log('Cvisitor : ', result);
    // [ {}, {}, {}]
    res.render('visitor', { data: result });
  });
};

//등록
exports.post_comment = (req, res) => {
  Visitor.insert(req.body.name, req.body.comment, function (result) {
    res.send({ id: result });
  });
};
