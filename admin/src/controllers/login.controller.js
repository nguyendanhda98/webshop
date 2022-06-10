const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (req, res) => {
  res.render('login/login');
};

const postLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (
    email != process.env.EMAIL_ADMIN ||
    password != process.env.PASSWORD_ADMIN
  ) {
    res.render('failed');
  } else {
    const tokenSecret = process.env.ACCESS_TOKEN_SECRET;
    const accessToken = jwt.sign({ email: email }, tokenSecret);
    res.cookie('accessToken', accessToken);
    res.redirect('/');
  }
};

module.exports = { login, postLogin };
