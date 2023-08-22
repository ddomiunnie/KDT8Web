const userModel = require('../model/User');

const main = (req, res) => {
  res.render('index');
};

const users = (req, res) => {
  res.render('users', { lists: userModel });
};

const add = (req, res) => {
  res.render('add');
};
module.exports = {
  main,
  users,
  add,
};
