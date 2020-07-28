/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* ИМПОРТ */
const router = require('express').Router();
const users = require('../data/users.json');
const cards = require('../data/cards.json');

/* ПЕРЕМЕННЫЕ */
let userIndex;

/* MIDDLEWARE. Это оно? */
function isUserExistent(id) {
  return users.some((user, index) => {
    userIndex = index;
    // eslint-disable-next-line eqeqeq
    return user._id == id;
  });
}

/* РУТЕРЫ */
router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/cards', (req, res) => {
  res.send(cards);
});

router.get('/users/:id', (req, res) => {
  if (!isUserExistent([req.params.id])) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }

  res.send(users[userIndex]);
});

/* ЭКСПОРТ */
module.exports = router;
