const mongoose = require('mongoose');

const customerFeedback = mongoose.Schema(
    {
        name : { type : String, required : true},
        rating : { type : Number, default : 0, min : 1, max : 5},
        feedback : { type : String, required : true}
    },
    {
        timestamp : true
    }
);

module.exports = mongoose.model('Feedback', customerFeedback);