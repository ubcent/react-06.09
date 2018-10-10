const history = require('connect-history-api-fallback');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/myBlog');
const { User, Post, Comment } = require('./models');

const root = path.resolve(__dirname, '..', 'dist')
app.use(express.static(root));
app.use(history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}));
app.use(express.static(root));
app.use(bodyParser.json());

app.get('/api/', (req, res) => {
    res.send({ message: 'Hello world' });
});

app.get('/api/users', async (req, res) => {
    console.log('Users');
    const users = await User.find();
    res.send(users);
});

app.get('/api/users/:id', async (req, res) => {
    const user = await User.find(({my_id: +req.params.id}));
    res.send(user);
});

app.post('/api/users', async (req, res) => {
    const user = new User(req.body);
    user = await user.save();
    res.send(user);
});

app.get('/api/comments', async (req, res) => {
    console.log('Comments');
    const comments = await Comment.find();
    res.send(comments);
});

app.get('/api/comments/:id', async (req, res) => {
    const comment = await Comment.find(({my_id: +req.params.id}));
    res.send(comment);
});

app.post('/api/comments', async (req, res) => {
    let comment = new Comment(req.body);
    comment = await comment.save();
    res.send(comment);
});

app.get('/api/posts', async (req, res) => {
    console.log('Posts');
    const posts = await Post.find();
    res.send(posts);
});

app.get('/api/posts/:id', async (req, res) => {
    const post = await Post.find(({my_id: +req.params.id}));
    res.send(post);
});

app.post('/api/posts', async (req, res) => {
    let post = new Post(req.body);
    post = await post.save();
    res.send(post);
});

app.patch('/api/posts/:id', async (req, res) => {
    const post = await Post.updateOne(
        { my_id: +req.params.id },
        { $set: req.body }
    );
    res.send(post);
});

app.listen(3000);