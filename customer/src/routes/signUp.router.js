const express = require('express');
const router = express.Router();
const { signUp } = require('../controllers/signUp.controller.js');

router.get('/', signUp);

module.exports = router;
