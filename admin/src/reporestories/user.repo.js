const User = require('../models/user.models');
const getUsers = async (query) => {
  const users = await User.find();
  return users.map((user) => user._doc);
};

module.exports = {
  getUsers,
};
