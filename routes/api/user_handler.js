const router = require("express").Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
//Load User Model
const User = require("../../models/Quiz_User");

router.get("/", (req, res) => {
  res.json({ msg: "hello World" });
});

// @router  POST api/users/register
// @desc    Register users
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //check Validationimport axios from "axios"
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm" //default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        avatar,
        usertype: req.body.usertype,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          newUser
            .save()
            .then(user => res.json(newUser))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @router  Post  api/users/login
// @desc    Login Users Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  //c heck Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  //find user by email
  User.findOne({ email }).then(user => {
    //check for user
    if (!user) {
      errors.email = "User is not found";
      return res.status(404).json(errors);
    }
    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // res.json({ msg: "Success" });

        // JWT payload
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          type: user.usertype
        };

        //generate token and send
        jwt.sign(payload, keys.secretOrKey, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @router  GET api/users/current
// @desc    Return current user
// @access  Private
// router.get(
//     "/current",
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//         res.json({
//             id: req.user.id, //this req.user coming from passport middleware at time of authenticating user
//             name: req.user.name,
//             email: req.user.email
//         });
//     }
// );

module.exports = router;
