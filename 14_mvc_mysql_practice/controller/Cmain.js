const model = require('../model/Model');

//GET
exports.main = (req, res) => {
  res.render('index');
};
//회원가입 페이지
exports.signup = (req, res) => {
  res.render('signup');
};
//로그인 페이지
exports.signin = (req, res) => {
  res.render('signin');
};
//회원 정보 조회 페이지
exports.profile = (req, res) => {
  console.log(req.params);
  model.db_profile(req.params, (result) => {
    res.render('profile', { data: result[0] });
  });
};
// --------------------------------------------------------------------
//POST
//회원가입
exports.post_signup = (req, res) => {
  model.db_signup(req.body, () => {
    res.json({ result: true });
  });
};

exports.post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ fesult: false });
    }
  });
};

//--------------------------------------------------------------------------
//PATCH
exports.edit_profile = (req, res) => {
  model.db_profile_edit(req.body, () => {
    res.json({ result: true });
  });
};
