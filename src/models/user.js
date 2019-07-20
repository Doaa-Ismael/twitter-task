const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const Joi = require('joi');



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    img: String, 
    bio: String

})

userSchema.index({name: 1});

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({_id: this._id},  'twitter-app');
};



userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
      return next();
    }
    //before save user hash his password
    if (this.password) {
      const salt = bcrypt.genSaltSync(10);
      this.password = bcrypt.hashSync(this.password, salt);
    }
    next();
});
  

function validate(user) {
    const schema = {
        email: Joi.string().required().email(),
        name: Joi.string().required().min(3).max(100), 
        password: Joi.string().required().min(4).max(100),
        bio: Joi.string().allow('')
    }
    return Joi.validate(user, schema);
}

exports.User = mongoose.model('User', userSchema);
exports.validate = validate;
