const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const { authUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');


router.post('/login', authUser); // Public route

router.route('/')
    .get(protect, getUsers) // Protected route
    .post(createUser);

router.route('/:id')
    .get(protect, getUserById) // Protected route
    .put(protect, updateUser) // Protected route
    .delete(protect, deleteUser); // Protected route

module.exports = router;
