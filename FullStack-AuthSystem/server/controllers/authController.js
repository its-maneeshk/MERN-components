const mongoose = require('mongoose');
const user = require('../models/User');
const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const { name, username, email, password, avatar } = req.body;
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
           return res.status(400).json({ message: 'Username or email already exists.' });
        }
        const newUser = new User({
            name, username, email, password, avatar
        });
        const saveduser = await newUser.save();
        res.status(201).json({ message: 'User created successfully!', user: saveduser });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user.', error: error.message })
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found!.' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password!' })
        }
        res.status(200).json({
            message: 'Login Successful.',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
            },
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in.', error: error.message })
    }
};

module.exports = { registerUser, loginUser };