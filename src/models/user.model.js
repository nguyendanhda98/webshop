const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
