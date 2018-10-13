const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',
  { useNewUrlParser: true }
);

const { Post } = require('./models');
const { Comment } = require('./models');

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParser.json());

app.get('/api/', (req, res) => {
   res.json({message: 'Hello world'});
});

app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

app.get('/api/comments', async (req, res) => {
  const comments = await Comment.find();
    res.send(comments);
});

app.post('/api/posts', async (req, res) => {
    let post = new Post(req.body);
    post = await post.save();

    res.send(post);
});

app.post('/api/comments', async (req, res) => {
  let comment = new Comment(req.body);
  comment = await comment.save();

  res.send(comment);
});

app.listen(3000);

