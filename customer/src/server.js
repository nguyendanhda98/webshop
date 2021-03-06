const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/webshop')
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error(error);
  });

const userRouter = require('./routes/user.route.js');
const indexRouter = require('./routes/index.router.js');
const loginRouter = require('./routes/login.router.js');
const signUpRouter = require('./routes/signUp.router.js');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRouter);
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signUp', signUpRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
