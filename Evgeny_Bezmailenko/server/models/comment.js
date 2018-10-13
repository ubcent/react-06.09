const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: { type: Number, required: true},
  postId: { type: String, required: true},
  date: { type: String, required: true},
  name: { type: String, required: true},
  body: { type: String, required: true}
});

module.exports = mongoose.model('Comment', commentSchema);