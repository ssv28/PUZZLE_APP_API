const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },

  email: {
    type: String,
    require: true,
    unique: true
  },

  password: {
    type: String,
    require: true,
  },

  profilepicture: {
    type: String,
    require: true,
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
