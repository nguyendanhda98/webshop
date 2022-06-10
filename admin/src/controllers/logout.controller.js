const logout = (req, res) => {
  res.clearCookie('accessToken');
  res.redirect('/');
};

module.exports = { logout };
