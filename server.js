const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const user = require("./routes/api/user_handler");
const quiz = require("./routes/api/quiz");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// DB Config
const db = require("./config/keys").mongoURI;
mongoose
  .set("useCreateIndex", true)
  .connect(db, { useNewUrlParser: true, createIndexes: true })
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport.js")(passport);
app.use(cors());

app.use("/api/users", user);
app.use("/api/quiz",quiz);
// app.use("/api/posts", posts);
// app.use("/api/profile", profile);
// Server static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
