const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    password: { type: String },
    email: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
