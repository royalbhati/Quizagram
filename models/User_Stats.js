const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const statsSchema = new Schema({
  quiz: {
    type: Schema.Types.ObjectId,
    ref: "quiz"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "quiz_user"
  },
  result: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Stats = mongoose.model("User_stats", statsSchema);
