const router = require("express").Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../../config/keys");

//Load Quiz Model
const Quiz = require("../../models/Quizzes");
const Stats = require("../../models/User_Stats");
const User = require("../../models/Quiz_User");

// @route   POST api/quiz/create-quiz
// @desc    Add new quiz
// @access  Private
router.post(
  "/create-quiz",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateExperienceInput(req.body);

    // // Check Validation
    // if (!isValid) {
    //   // Return any errors with 400 status
    //   return res.status(400).json(errors);
    // }

    const newQuiz = {};
    newQuiz.user = req.user.id;
    newQuiz.quizzes = req.body.quizzes;
    newQuiz.answer = req.body.answer;
    new Quiz(newQuiz).save().then(quiz => res.json(quiz));
  }
);

// @route   GET api/quiz/all
// @desc    Return all quiz
// @access  Private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    errors = {};
    Quiz.find()
      .then(quiz => {
        if (!quiz) {
          errors.quiz = "There are no Quiz";
          return res.status(404).json(errors);
        }

        res.json(quiz);
      })
      .catch(err => res.status(404).json({ Quiz: "There are no Quiz" }));
  }
);

// @route   GET api/quiz/:id
// @desc    Return quiz by id
// @access  Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    errors = {};
    // console.log(req.params.id);
    Quiz.findById({ _id: req.params.id })
      .then(quiz => {
        if (!quiz) {
          errors.quiz = "There is no Quiz";
          return res.status(404).json(errors);
        }
        res.json(quiz);
      })
      .catch(err => res.status(404).json({ Quiz: "There is no Quiz" }));
  }
);

// @route   POST api/quiz/eval
// @desc    calculate user stats
// @access  Private
router.post(
  "/eval",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get user detail from token and get quiz data using id
    errors = {};
    // console.log(req.params.id);
    // Quiz.findById({ _id: req.body.quiz_id })
    Quiz.findById({ _id: "5cbc71a4dc625c37828e3802" })
      .then(quiz => {
        if (!quiz) {
          errors.quiz = "There is no Quiz";
          return res.status(404).json(errors);
        }

        const data = {
          answer: [{ question: 0, a: "1" }, { question: 1, a: "1" }]
        };
        // console.log(quiz);

        const user_answer = data.answer.map(ans => ans.a);
        // console.log(user_answer);
        const quiz_answer = quiz.answer;
        // console.log(quiz_answer);

        let count = 0;
        for (let i = 0; i < user_answer.length; i++) {
          if (user_answer[i] === quiz_answer[i]) {
            count++;
          }
        }
        const right_answer = count * 2;
        const wrong_answer = quiz_answer * -0.5;
        // total answer = 

        // const newStats

        // res.json(quiz);
        //get user from req.body.user_id
        //compare answers and store the result of the quiz and update rank
        // User.find({ _id: req.body.user_id })
        //   .then(user => {

        //   })
        //   .catch(err => res.status(404).json({ User: "Not a User" }));
      })
      .catch(err => res.status(404).json({ Quiz: "There is no Quiz" }));
  }
);

module.exports = router;
