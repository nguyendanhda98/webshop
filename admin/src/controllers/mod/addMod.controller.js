const add = (req, res) => {
  res.send('addMod');
};
const postAdd = (req, res) => {
  res.send('postAdd');
};

module.exports = { add, postAdd };
