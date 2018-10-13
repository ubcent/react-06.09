const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: { type: Number, required: true},
  id: { type: Number, required: true},
  date: { type: String, required: true},
  title: { type: String, required: true},
  preview: { type: String, required: true},
  body: { type: String, required: true}
});

module.exports = mongoose.model('Post', postSchema);