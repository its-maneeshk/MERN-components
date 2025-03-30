const mongoose = require("mongoose");

const connectingDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log(`connection successful...`)
    }
    catch (error) {
        console.error(`connecting error : ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectingDB;