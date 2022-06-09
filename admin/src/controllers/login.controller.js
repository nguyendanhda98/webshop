const login = (req, res) => {
  res.render('login/login');
};

const postLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  res.cookie('email', email);
  res.redirect('/');
};

module.exports = { login, postLogin };
