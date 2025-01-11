const User = require('../models/userModel');

const registerController = async (req, res) => {
    try {
        const { username, email, password, phone, address } = req.body;

        if (!username || !email || !password || !phone || !address) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ username, email, password, phone, address });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error in registerController:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { registerController };
