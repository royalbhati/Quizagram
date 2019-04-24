const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// @route   POST api/post
// @desc    Create post
// @access  Private
router.post(
  "/",
//   passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newPost = new Post({
      text: req.body.post,
      name: req.body.name,
      user: req.user.user_id
    });

    newPost.save().then(post => res.json(post));
  }
);

// @route   GET api/posts/all
// @desc    Get all post
// @access  Public
router.get("/all", (req, res) => {
  Post.find()
    .then(post => {
      res.json(post);
    })
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});
module.exports = router;