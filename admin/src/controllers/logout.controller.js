const logout = (req, res) => {
  res.clearCookie('email');
  res.render('index');
};

module.exports = { logout };
