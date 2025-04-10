const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email , password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password ) {
            return res.status(401).json({ message: 'Invalid Credential' });
        }
        res.status(200).json({ message: 'Login Successful' });
    }
    catch(error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/register', async(req, res) => {
    const { name, email, password } = req.body;

    try{
        const userAlreadyExists = await User.findOne({ email });
        if(userAlreadyExists) {
            return res.status(409).json({ message: "User already exists."});
        }
        const createUser = new User({ name, email, password });
        await createUser.save();

        res.status(201).json({ message: "User registered successfully."});
    }
    catch(error) {
        res.status(500).json({ message: "Server error..."});
    }
})

router.patch("/forget", async(req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ message: 'User doesnot exists...' });
        }
        user.password = password;
        await user.save();
        res.status(200).json({ message: "Password updated successfully." });
    }
    catch(error) {
        res.status(500).json({ message: "Server error..."});
    }
});

module.exports = router;


