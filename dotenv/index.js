const express = require('express');
const dotenv = require('dotenv');

// CREATING APP OF EXPRESS
const app = express();

// CREATING A PATH THROUGH WHICH VARIABLES OF '.env' FILE WILL BE ACCESSED
dotenv.config();

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send(process.env.MESSAGES || "Message got from index.js");
});

app.listen(PORT, () => {
    console.log(`Server started at port http://localhost:${PORT}`);
});