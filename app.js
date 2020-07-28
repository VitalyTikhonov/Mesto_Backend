/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');

const { PORT = 3000 } = process.env;
const app = express();
app.listen(3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use((req, res) => {
  // eslint-disable-next-line quote-props
  res.status(404).send({ 'message': 'Запрашиваемый ресурс не найден' });
});
