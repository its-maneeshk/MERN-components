const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

dotenv.config();
PORT = process.env.PORTS || 8080;

const app = express();
app.use(express.json());
app.use(cors());


connectDB();

app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/feedbacks', feedbackRoutes);

app.listen(PORT, () => {
    console.log(`running at: http://localhost:${PORT}`);
})