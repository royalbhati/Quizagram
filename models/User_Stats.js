const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const statsSchema = new Schema({
  quiz: {
    type: Schema.Types.ObjectId,
    ref: "quiz"
  },
  stats: [
    {
      user_id: {
        type: Schema.Types.ObjectId,
        ref: "quiz_user"
      },
      rank: {
        type: Number,
        required: true,
        default: []
      },
      results: {
        // result of every quiz in percent
        type: Number,
        required: true,
        default: []
      }
    }
  ],
  // quiz_done: [
  //   {
  //     total_question: {
  //       type: Number,
  //       required: true
  //     },
  //     right_answer: {
  //       type: Number,
  //       required: true
  //     }
  //   }
  // ],

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Stats = mongoose.model("User_stats", statsSchema);
