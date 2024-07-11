// backend/controllers/authController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel'); 

// Auth user & get token
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const adminUser = await Admin.findOne({ email });

    if (adminUser && (await adminUser.matchPassword(password))) {
        res.json({
            _id: adminUser._id,
            first_name: adminUser.first_name,
            last_name: adminUser.last_name,
            email: adminUser.email,
            role: adminUser.role,
            token: generateToken(adminUser._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = { authUser };
