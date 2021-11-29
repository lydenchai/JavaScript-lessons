var express = require("express");
var app = express();

const SERVER_PORT = 3000;

let currentScore = {
  student: "lyhour",
  score: "4000",
  topic: "cs cup",
};

// Start server on port 3000
app.listen(SERVER_PORT, function () {
  console.log("listening on : " + SERVER_PORT);
});

// Server the front ressources
app.use(express.static("public"));
// Facilitates reading requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO manage the following REQUESTS

// 1- SET score

// 2- GET score

// 3- DELETE score

