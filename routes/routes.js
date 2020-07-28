/* eslint-disable no-underscore-dangle */
/* ИМПОРТ */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

/* MIDDLEWARE. Это оно? */
function readFileAsset(fileName) {
  return fs.createReadStream(path.join(__dirname, '../data', fileName), { encoding: 'utf8' });
}

function searchForUser(array, id) {
  return array.find((user) => user._id === id.toString());
}

function sendWholeJson(file, res) {
  const readStream = readFileAsset(file);
  res.set({ 'content-type': 'application/json; charset=utf-8' });
  readStream.pipe(res);
}

/* РУТЕРЫ */
router.get('/users', (req, res) => {
  sendWholeJson('users.json', res);
});

router.get('/cards', (req, res) => {
  sendWholeJson('cards.json', res);
});

router.get('/users/:id', (req, res) => {
  const usersReadStream = readFileAsset('users.json');
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
