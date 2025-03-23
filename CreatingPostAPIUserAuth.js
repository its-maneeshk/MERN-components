const express =  require('express');
const env = require('dotenv');

const app = express();

// Middleware to parse JSON data
app.use(express.json());

env.config();

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send(process.env.MESSAGES || "Failed to get port from '.env' so running from this file.");
});

// Define a POST route
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    res.status(201).json({ message: `User ${name} added successfully!` });
  });

app.listen(PORT, () => {
    console.log(`Server running from port http://localhoste:${PORT}`);
});