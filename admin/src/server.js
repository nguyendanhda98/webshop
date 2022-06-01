const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

const testRoute = require('./routes/test.route.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', testRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
