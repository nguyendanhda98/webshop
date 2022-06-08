const express = require('express');
const router = express.Router();
const controller = require('../controllers/login.controller.js');

router.get('/', controller.login);
router.post('/', controller.postLogin);

module.exports = router;
