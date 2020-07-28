const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 10,
        min: 9,
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;