const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const { User } = require('./models');

const bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('Middleware');
  next();
});

app.get('/api/', (req, res) => {
  res.send({ message: 'Hello world' });
});

app.get('/api/users', async (req, res) => {
  console.log('Users');
  const users = await User.find();
  res.send(users);
});

app.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  res.send(user);
});

app.post('/api/users', async (req, res) => {
  let user = new User(req.body);
  user = await user.save();

  res.send(user);
});

app.delete('/api/users/:id', async (req, res) => {
  await User.remove({ _id: req.params.id });

  res.send('removed');
});

app.listen(3000);