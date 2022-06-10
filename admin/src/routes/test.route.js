const express = require('express');
const router = express.Router();

const {
  testController,
  usersController,
  searchController,
  createController,
  postCreateController,
  userController,
} = require('../controllers/test.controller.js');
const modController = require('../controllers/mod/addMod.controller.js');

router.get('/', testController);
router.get('/addMod', modController.add);
router.post('/addMod', modController.postAdd);

router.get('/users', usersController);
router.get('/users/search', searchController);
router.get('/users/create', createController);
router.get('/users/:id', userController)

router.post('/users/create', postCreateController)



// router.post('/deleteMod', modController.delelte);

module.exports = router;
