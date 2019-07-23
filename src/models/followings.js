const mongoose = require('mongoose');

const followingsSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    following: [{ type: mongoose.Schema.Types.ObjectId } ]

})


module.exports = mongoose.Model('Followings', followingsSchema);