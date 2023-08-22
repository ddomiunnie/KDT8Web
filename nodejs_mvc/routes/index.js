const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

//router
router.get('/', controller.main);
//전체 목록 보기
//GET /comments
router.get('/comments', controller.comments);
//상세보기
//GET /comment/:id
router.get('/comment/:index', controller.comment);

module.exports = router;
