const mongoose = require('mongoose')
const Joi = require('joi');

const tweetSchema = new mongoose.Schema({

    user: {
        ref: { type: mongoose.Types.ObjectId, ref: 'User' },
        name: String, 
        img: String,
    },
    title: {
        required: true, 
        type: String, 
        minlength: 1,
        maxlength: 100,
        trim: true
    },
    content: {
        required: true, 
        type: String, 
        minlength: 1,
        maxlength: 255,
        trim: true
    },
    commentsNumber: {
        required: true, 
        default: 0, 
        type: Number
    }

});



function validate(user) {
    const schema = {
        title: Joi.string().required().min(1).max(100) ,
        content: Joi.string().required().min(1).max(255)
        //commentsNumber: Joi.number().required().min(0),
    }
    return Joi.validate(user, schema);
}


exports.Tweet = mongoose.model('Tweet', tweetSchema);
exports.validate = validate;
