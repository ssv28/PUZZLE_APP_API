const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    puzzle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PUZZLE',
        required: true,
    },

    commentText: {
        type: String,
        required: true,
        trim: true,
    },

    rating: {
        type: Number,
        min: 1,
        max: 5, // Assuming a 5-star rating system
    },

});


const REVIEW = mongoose.model('REVIEW', ReviewSchema);
module.exports = REVIEW;


// user: Reference to the user who posted the comment or review.
// puzzle: Reference to the puzzle being reviewed.
// rating: Rating out of 5.
// commentText: The comment or review text.