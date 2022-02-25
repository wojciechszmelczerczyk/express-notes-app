// express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require("mongoose");

const uri = process.env.DB_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// routes
const user = require("./routes/user.js");
const note = require("./routes/note.js");
const speechRecognition = require("./routes/speechRecognition.js");

app.use(user);
app.use(note);
app.use(speechRecognition);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
