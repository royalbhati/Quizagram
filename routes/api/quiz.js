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
    newQuiz.quizname = req.body.quizName;
    newQuiz.time = Number(req.body.time);
    newQuiz.passsingcriteria = Number(req.body.passingCriteria);
    console.log(newQuiz);

    new Quiz(newQuiz)
      .save()
      .then(quiz => res.json(quiz))
      .catch(err => console.log(err));
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
    Quiz.findById({ _id: req.params.id })
      .then(quiz => {
        if (!quiz) {
          errors.quiz = "There is no Quiz";
          return res.status(404).json(errors);
        }
        // console.log("sadsad", quiz);

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
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get user detail from token and get quiz data using id
    errors = {};
    // console.log("test", req.body.answersArr.answers);

    // console.log(req.params.id);
    // Quiz.findById({ _id: req.body.quiz_id })
    Quiz.findById({ _id: req.body.quiz_id })
      .then(quiz => {
        if (!quiz) {
          errors.quiz = "There is no Quiz";
          return res.status(404).json(errors);
        }
        // console.log("quiz",quiz);
        const criteria = quiz.passsingcriteria;
        // console.log(criteria);

        //get user from req.body.user_id
        //compare answers and storenswer);nswer); the result of the quiz and update rank
        User.find({ _id: req.body.user_id })
          .then( async user => {
            // console.log(req.body.answersArr);
            const user_answer = [];
            await req.body.answersArr.answers.map(elem => {
              user_answer.push(elem.a);
            });
            // const user_answer = req.body.answer;
             await console.log("arra", user_answer);
            const quiz_answer = quiz.answer;
            // console.log(quiz_answer);

            let count = 0;
            for (let i = 0; i < user_answer.length; i++) {
              if (user_answer[i] === quiz_answer[i]) {
                count++;
              }
            }

            const right_answer = count * 2;
            const wrong_answer = (quiz_answer.length - count) * -0.5;
            const number = right_answer + wrong_answer;

            const percentage = (number * 100) / (user_answer.length * 2);
            // console.log(percentage);

            const newStats = {};
            newStats.user = req.body.user_id;
            newStats.quiz = req.body.quiz_id;
            newStats.result = criteria < percentage ? "pass" : "fail";
            new Stats(newStats)
              .save()
              .then(stats => res.json(stats))
              .catch(err => console.log(err));
          })
          .catch(err => res.status(404).json({ User: "Not a User" }));
      })
      .catch(err => res.status(404).json({ Quiz: "There is no Quiz" }));
  }
);

// @route   GET api/quiz/:companyName
// @desc    Return quiz name and id
// @access  Private
router.get(
  "/name/:companyName",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    errors = {};

    // console.log(req.params.id);
    User.find({ companyname: req.params.companyName })
      .then(user => {
        if (!user) {
          return res.status(404).json(errors);
        }
        // console.log("dgdfgd", user[0]._id);

        Quiz.findOneAndUpdate({ user: user[0]._id })
          .then(quiz => {
            if (!quiz) {
              errors.Quiz = "There is no Quiz";
              return res.status(404).json(errors);
            }

            res.json(
              quiz.map(quiz => {
                return { quiz_id: quiz._id, quizname: quiz.quizname };
              })
            );
          })
          .catch(err => res.status(404).json({ User: "There is no User" }));
      })
      .catch(err => res.status(404).json({ User: "There is no User" }));
  }
);

// @route   GET api/quiz/result/:id
// @desc    Return quiz result
// @access  Public
router.get(
  "/result/:id",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    errors = {};
    Stats.find({ quiz: req.params.id })
      .then(quiz => {
        if (!quiz) {
          errors.quiz = "There is no Quiz";
          return res.status(404).json(errors);
        }
        // console.log("sadsad", quiz);
        res.json(quiz);
      })
      .catch(err => res.status(404).json({ Quiz: "There is no Quiz" }));
  }
);


module.exports = router;
