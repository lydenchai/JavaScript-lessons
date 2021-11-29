var express = require("express");
var app = express();

const SERVER_PORT = 3000;

let currentScore = {
  student: "lyhour",
  score: "4000",
  topic: "cs cup",
};

// 1- Start server on port 3000
app.listen(SERVER_PORT, function () {
  console.log("listening on : " + SERVER_PORT);
});

// 2- Facilitates reading requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 3- Server the front ressources
app.use(express.static("public"));

// SET score
app.post("/score", function (req, res) {
  currentScore = req.body;
  res.send(currentScore);
});

// GET score
app.get("/score", function (req, res) {
  res.send(currentScore);
});

// DELETE score
app.delete("/score", function (req, res) {
  currentScore = {
    student: "nothing",
    score: "nothing",
    topic: "nothing",
  };
  res.send(currentScore);
});
