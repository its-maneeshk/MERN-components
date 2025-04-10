const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoute');

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use('/user',userRoute);

const PORT = process.env.PORT || 8081;


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});