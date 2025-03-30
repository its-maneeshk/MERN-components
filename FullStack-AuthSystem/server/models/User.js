const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name : { type : String, required : true},
        username : { type : String, required : true,minlength: [3, 'Username should have at least 3 characters.'], maxlength: [20, 'Username cannot exceed 20 characters.'], unique : [true, 'Username should be unique.']}, 
        email : { type : String,lowercase: true, required : true, unique : [true, "Email shoud be unique."]},
        password : { type : String, required : [true, "Password can't be empty"], min : 6, max : 32},
        avatar : { type : String, default : 'https://imgs.search.brave.com/RHpYJTKMaQN1BslC5cWWAv_YsIRFk7zEoLFNvBecqQw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJx/aDRhL3N0eWxlcy9j/b21tdW5pdHlJY29u/XzdrZWNkNHVmNGEz/YzEucG5n'}
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model('user', userSchema);