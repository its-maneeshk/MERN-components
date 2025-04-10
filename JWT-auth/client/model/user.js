const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : { type: String,trim: true, required: true},
    email : { type: String, unique: true, lowercase: true, trim: true, required: true},
    password : { type: String, minlength: 8, maxlength: 40, required: true}
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;