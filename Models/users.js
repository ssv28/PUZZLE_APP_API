const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
  },

  profilepicture: {
    type: String,
    required: true,
  },

  completedPuzzles: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PUZZLE',
  },

  favoritePuzzles: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PUZZLE',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }

})

const User = mongoose.model('User', userSchema);     // Create a model from the schema
module.exports = User

