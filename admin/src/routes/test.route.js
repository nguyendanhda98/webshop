const express = require('express');
const { route } = require('../../../customer/src/routes/user.route.js');
const router = express.Router();

const { testController } = require('../controllers/test.controller.js');

router.get('/', testController);

module.exports = router;
