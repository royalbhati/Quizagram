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
      option1: {
        type: String,
        required: true
      },
      option2: {
        type: String,
        required: true
      },
      option3: {
        type: String,
        required: true
      },
      option4: {
        type: String,
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
