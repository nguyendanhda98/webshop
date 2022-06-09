const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const port = 4000;

const testRoute = require('./routes/test.route.js');
const loginRoute = require('./routes/login.route.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', testRoute);
app.use('/login', loginRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
