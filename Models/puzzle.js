const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PuzzleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  puzzleType: {
    type: String,
    required: true,
    enum: ['crossword', 'jigsaw', 'sudoku', 'word-search', 'others'],
  },

  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium',
  },

  hints: [{
    type: String,
    trim: true,
  }],

  timeLimit: {
    type: Number, // Time limit in seconds (if applicable)
    required: true,
  },

});


const PUZZLE = mongoose.model('PUZZLE', PuzzleSchema);

module.exports = PUZZLE;

