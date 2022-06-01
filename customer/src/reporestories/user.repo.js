const User = require('../models/user.model.js');

const getUsers = async (name) => {
  const users = await User.find({ name });
  return users;
};
module.exports = { getUsers };
