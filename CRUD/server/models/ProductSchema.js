const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name : { type : String , required : true },
        price : { type : Number , required : true , default : 0.0 },
        description : { type : String },
        stock : { type : Number , default : 0 },
        isAvailable : { type : Boolean, default : true }
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model('Product', productSchema);