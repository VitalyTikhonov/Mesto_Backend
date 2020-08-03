const express = require('express');
const path = require('path');
const routerCards = require('./routes/routerCards.js');
const routerUsers = require('./routes/routerUsers.js');

const { PORT = 3000 } = process.env;
const app = express();
app.listen(PORT);
app.use(express.static(path.join(__dirname, 'public')));
app.use(routerCards);
app.use(routerUsers);
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
