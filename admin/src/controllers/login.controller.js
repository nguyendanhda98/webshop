const login = (req, res) => {
  res.render('login/login');
};

const postLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  res.render('index', { name: email });
};

module.exports = { login, postLogin };
