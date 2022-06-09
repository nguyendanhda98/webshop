const express = require('express');
const router = express.Router();

const controller = require('../controllers/logout.controller.js');

router.get('/', controller.logout);

module.exports = router;
