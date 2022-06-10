const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/webshop')
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error(error);
  });

const port = 4000;

const testRoute = require('./routes/test.route.js');
const loginRoute = require('./routes/login.route.js');
const logoutRoute = require('./routes/logout.route.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use('/', testRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
