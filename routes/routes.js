/* eslint-disable no-underscore-dangle */
/* ИМПОРТ */
const router = require('express').Router();

const { readFileAsset, searchForUser, sendWholeJson } = require('../helpers/helpers.js');

/* РУТЕРЫ */
router.get('/users', (req, res) => {
  sendWholeJson('users.json', res);
});

router.get('/cards', (req, res) => {
  sendWholeJson('cards.json', res);
});

router.get('/users/:id', (req, res) => {
  const usersReadStream = readFileAsset('users.json', res);
  let users = '';

  usersReadStream.on('data', (data) => {
    users += data;
  });

  usersReadStream.on('end', () => {
    users = JSON.parse(users);

    if (!searchForUser(users, [req.params.id])) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }

    res.send(searchForUser(users, [req.params.id]));
  });
});

/* ЭКСПОРТ */
module.exports = router;
