const express = require('express');
const dotenv = require('dotenv');
const connectingDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();
PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

connectingDB();

app.use('/api/users', userRoutes);

app.listen(PORT, () =>{
    console.log(`Running at: http://localhost:${PORT}`);
})
