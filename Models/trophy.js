const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrophySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  
  description: {
    type: String,
    required: true,
    trim: true,
  },

  icon: {
    type: String,
    trim: true, // URL or file path to the trophy icon
  },

  earnedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
 
});


const TROPHY = mongoose.model('TROPHY', TrophySchema);
module.exports = TROPHY;
