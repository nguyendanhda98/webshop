const express = require('express');
const router = express.Router();
const { login } = require('../controllers/login.controller.js');

router.get('/', login);

module.exports = router;
