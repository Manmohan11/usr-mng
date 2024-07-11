const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
// Remove { protect } = require('../middleware/authMiddleware');


router.route('/')
    .get(getUsers) // Public route
    .post(createUser);

router.route('/:id')
    .get(getUserById) // Public route
    .put(updateUser) // Public route
    .delete(deleteUser); // Public route

module.exports = router;
