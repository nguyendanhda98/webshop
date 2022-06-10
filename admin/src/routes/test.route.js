const express = require('express');
const { route } = require('../../../customer/src/routes/user.route.js');
const router = express.Router();

const { testController } = require('../controllers/test.controller.js');
const modController = require('../controllers/mod/addMod.controller.js');

router.get('/', testController);
router.get('/addMod', modController.add);
router.post('/addMod', modController.postAdd);
// router.post('/deleteMod', modController.delelte);

module.exports = router;
