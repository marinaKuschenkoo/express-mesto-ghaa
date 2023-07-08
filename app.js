const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

// 64a5ea224e759e5c95e7f9e3
app.use((req, res, next) => {
  req.user = {
    _id: '64a5f310a1b6f58391f11bc1',
  };

  next();
});

app.use(express.json());

app.use('/', userRouter);
app.use('/', cardRouter);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Страницы не существует' });
});

app.listen(PORT, () => {
  console.log('Сервер запущен');
});
