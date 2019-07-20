let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    fullName: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100
    },
    img: String, 
    bio: String

})

userSchema.index({fullName: 1});

module.exports = mongoose.model('User', userSchema);
