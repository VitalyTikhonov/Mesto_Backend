/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const router = require('express').Router();

const users = require('../data/users.json');
const { cards } = require('../data/cards.json');

let userIndex;

function isUserExistent(id) {
  return users.some((user, index) => {
    userIndex = index;
    // eslint-disable-next-line eqeqeq
    return user._id == id;
  });
}

router.get('/users/:id', (req, res) => {
  if (!isUserExistent([req.params.id])) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }

  res.send(users[userIndex]);
});

module.exports = router;
