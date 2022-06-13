const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    regno: {
        type: String,
        required: true,
        length: 9,
    },
    block: {
        type: String,
        requried: true,
        length: 1,
    },
    room: {
        type: Number,
        required: true,
    },
});
const User = mongoose.model('User', schema);
module.exports = User;
