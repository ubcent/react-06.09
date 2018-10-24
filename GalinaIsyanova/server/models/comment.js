const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    my_id: {
        type: Number, 
        required: true,
        default: 0, 
    },
    postTitle: {
        type: String,
        required: true,
        default: '',
    }, 
    fullPageRef: {
        type: String,
        required: true,
        default: '',
    },
    userImageSrc: {
        type: String,
        default: '',
    },
    userName: {
        type: String,
        required: true,
        default: '',
    },
    commentText: {
        type: String,
        required: true,
        default: '',
    },
});

module.exports = mongoose.model('Comment', commentSchema);