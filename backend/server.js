const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // MongoDB connection setup
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB(); // This function should handle MongoDB connection setup

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
