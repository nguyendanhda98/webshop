const userRepo = require('../reporestories/user.repo.js');

const getListUser = async (name) => {
  const users = await userRepo.getUsers(name);
  const newUsers = users.map((user) => {
    const { name, age } = user;
    return {
      name,
      age: age + 2,
    };
  });
  return newUsers;
};

module.exports = { getListUser };
