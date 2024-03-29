const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    unique: true
  },
  avatar: {
    type: String
  },
  usertype: {
    type: String,
    required: true
  },
  companyname: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("quiz_user", userSchema);
