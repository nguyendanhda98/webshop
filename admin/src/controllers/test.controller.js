const userRepo = require('../reporestories/user.repo');

const testController = (req, res) => {
  const cookie = req.cookies;
  res.render('index', cookie);
};

const usersController = async (req, res) => {
  const users = await userRepo.getUsers();

  return res.render('user/index', {
    users,
  });
};

const searchController = (req, res) => {
  const q = req.query.q;
  const matchedUsers = users.filter(function (user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('user/index', {
    users: matchedUsers,
  });
};
const createController = (req, res) => {
  res.render('user/create');
};

const postCreateController = (req, res) => {
  users.push(req.body);
  res.redirect('/users');
};

const userController = (req, res) => {
  const id = req.params.id;
};

module.exports = {
  testController,
  usersController,
  searchController,
  createController,
  postCreateController,
  userController,
};
