const router = require("express").Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");

//Load User Model
const User = require("../../models/Quiz_User");

router.get("/", (req, res) => {
  res.json({ msg: "hello World" });
});

module.exports = router;
