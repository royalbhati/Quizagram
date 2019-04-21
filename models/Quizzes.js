const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const quizSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "quiz_user"
  },

  quizzes: [
    {
      index: {
        type: Number,
        required: true
      },
      question: {
        type: String,
        required: true
      },
      options: {
        type: [String],
        required: true
      }
    }
  ],
  answer: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Quiz = mongoose.model("Quiz", quizSchema);