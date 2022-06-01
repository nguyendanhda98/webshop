const express = require('express');
const router = express.Router();
const { index } = require('../controllers/index.controller.js');

router.get('/', index);

module.exports = router;
