const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    my_id: {
        type: Number, 
        required: true,
        default: 0, 
    },
    imageSrc: {
        type: String,
        required: true,
        default: '',
    }, 
    imageSrcFull: {
        type: String,
        required: true,
        default: '',
    },
    dateRegistration: {
        type: String,
        required: true,
        default: '',
    },
    posts: {
        type: Array,
        required: true,
        default: [],
    },
    name: {
        type: String,
        required: true,
        default: '',
    },
    pageRef: {
        type: String,
        required: true,
        default: '',
    },
});

module.exports = mongoose.model('User', userSchema);