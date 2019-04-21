const router = require("express").Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");

//Load Quiz Model
const Quiz = require("../../models/Quizzes");

// @route   POST api/quiz/create-quiz
// @desc    Add new quiz
// @access  Private
router.post(
  "/create-quiz",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateExperienceInput(req.body);

    // // Check Validation
    // if (!isValid) {
    //   // Return any errors with 400 status
    //   return res.status(400).json(errors);
    // }
    
    const newQuiz = {};
    newQuiz.user = req.user.id;
    newQuiz.quizzes = req.body.quizzess;
    newQuiz.answer = req.body.answer;
    new Quiz(newQuiz).save().then(quiz => res.json(quiz));
  }
);

module.exports = router;
