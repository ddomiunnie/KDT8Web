const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

//router
router.get('/', controller.main);

//회원 리스트 보기
router.get('/users', controller.users);

router.get('/add', controller.add);
module.exports = router;
