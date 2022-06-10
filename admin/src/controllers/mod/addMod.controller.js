const add = (req, res) => {
  res.render('mod/addMod');
};
const postAdd = (req, res) => {
  res.send('postAdd');
};

module.exports = { add, postAdd };
