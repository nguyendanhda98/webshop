const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (req, res) => {
  res.render('login/login');
};

const postLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET;
  const accessToken = jwt.sign({ email: email }, tokenSecret, {
    expiresIn: '30s',
  });
  res.cookie('email', accessToken);
  res.redirect('/');
};

module.exports = { login, postLogin };
