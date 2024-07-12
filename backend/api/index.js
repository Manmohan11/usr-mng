const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../config/db'); // Adjust the path as necessary
const userRoutes = require('../routes/userRoutes');
const cors = require('cors');
const { notFound, errorHandler } = require('../middleware/errorMiddleware');

dotenv.config();
connectDB(); // MongoDB connection

const app = express();

// Middleware
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: 'https://usr-mng-frontend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
