const userService = require('../services/user.service.js');

const getListUser = async (req, res) => {
  const { name } = req.query;
  const users = await userService.getListUser(name); // res.send('Birds home page')
  res.render('users/users', { users });
};
const postCreateUser = (req, res) => {
  console.log(req.body);
  res.json('ok');
};

module.exports = { getListUser, postCreateUser };
