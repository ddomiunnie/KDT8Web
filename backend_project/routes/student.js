const express = require('express');
const router = express.Router();
const controller = require('../controller/Cstudent'); // 이 부분 수정

router.get('/', controller.index);
router.post('/student', controller.post_student);
router.post('/class', controller.post_class);
router.get('/student', controller.get_student);

module.exports = router;
