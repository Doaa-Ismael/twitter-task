const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({


    tweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String, 
        minlength: 1,
        maxlength: 255
    }, 
    subComments: [ {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: {
            type: String, 
            minlength: 1,
            maxlength: 255
        }
    } ]

}, 
{ timestamps: true }
);


module.exports = mongoose.model('Comment', commentSchema);