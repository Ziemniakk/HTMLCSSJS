const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: {
        type: String,
        required: true,
    },
    pass:{
        type: String,
        required: true,
    },
    premium: {
        type: Boolean,
        required: false,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User;