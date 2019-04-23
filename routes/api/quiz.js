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
    errors = {}
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


// @route   POST api/quiz/id
// @desc    Return quiz by id
// @access  Private
router.post(
  "/id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    errors = {}
    console.log(req.data);
    console.log(req.id);

    // Quiz.findById({ "_id": new ObjectId(req.id)})
    //   .then(quiz => {
    //     if (!quiz) {
    //       errors.quiz = "There is no Quiz";
    //       return res.status(404).json(errors);
    //     }
    //     res.json(quiz);
    //   })
    //   .catch(err => res.status(404).json({ Quiz: "There is no Quiz" }));
  }
);

module.exports = router;
