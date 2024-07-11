// backend/utils/seeder.js

require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel'); 

const mongoURI = process.env.MONGO_URI; // Fetch MongoDB URI from environment variables



// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1); // Exit process with failure
    }
};

connectDB();

// Seeder function to create admin user
const seedAdminUser = async () => {
    try {
        // Create new admin user
        const adminUser = new Admin({
            first_name: 'Admin',
            last_name: 'User',
            email: 'admin@example.com', 
            password: 'admin', // (hashed in db)
        });

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        adminUser.password = await bcrypt.hash(adminUser.password, salt);

        await adminUser.save();

        console.log('Admin user created');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedAdminUser();
