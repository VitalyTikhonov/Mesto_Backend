/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');

const { PORT = 3000 } = process.env;
const app = express();
app.listen(3000);
app.use(express.static(path.join(__dirname, 'public')));
