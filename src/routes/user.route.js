const express = require('express');
const router = express.Router();
const { getListUser, postCreateUser } = require('../controllers/user.controler.js');

router.get('/list-user', getListUser);
router.post('/create-user', postCreateUser);

module.exports = router;
