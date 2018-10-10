const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    my_id: {
        type: Number, 
        required: true,
        default: 0, 
    },
    imgSrcShort: {
        type: String, 
        required: true,
        default: '', 
    },
    postTitle: {
        type: String, 
        required: true,
        default: '', 
    },
    postTextShort: {
        type: String, 
        required: true,
        default: '', 
    }, 
    fullPageRef: {
        type: String, 
        required: true,
        default: '', 
    }, 
    datePublishedShort: {
        type: String, 
        required: true,
        default: '', 
    }, 
    datePublished: {
        type: String, 
        required: true,
        default: '', 
    },
    author: {
        name: {
            type: String, 
            required: true,
            default: '', 
        }, 
        pageRef: {
            type: String, 
            required: true,
            default: '', 
        }
    }, 
    imageSrc: {
        type: String, 
        required: true,
        default: '', 
    },
    textWithClass: {
        type: Array, 
        required: true,
        default: [], 
    },
    blockquote: {
        text: {
            type: String, 
            required: true,
            default: '', 
        }, 
        footerText: {
            type: String, 
            required: true,
            default: '', 
        },
        citeTitle: {
            type: String, 
            required: true,
            default: '', 
        },
        citeText: {
            type: String, 
            required: true,
            default: '', 
        },
    }, 
    textWithClassMore: {
        type: Array, 
        required: true,
        default: [], 
    }, 
    comments: {
        type: Array, 
        required: true,
        default: [], 
    }
});

module.exports = mongoose.model('Post', postSchema);