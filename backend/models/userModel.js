const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
