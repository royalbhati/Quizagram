const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const statsSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "quiz_user"
  },
  // quiz: {
  //   type: [Schema.Types.ObjectId],
  //   ref: "quiz"
  // },
  // rank: {
  //   type: Number,
  //   required: true,
  //   default:0
  // },
  quiz_done: [
    {
      total_question: {
        type: Number,
        required: true
      },
      right_answer: {
        type: Number,
        required: true
      }
    }
  ],
  results: {
    // result of every quiz in percent
    type: [Number],
    required: true,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Stats = mongoose.model("User_stats", statsSchema);
