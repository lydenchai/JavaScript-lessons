const express = require("express");
const app = express();
// 2-  Listen to the port
const SERVER_PORT = 3000;
app.listen(3000, () => console.log("listening on : " + SERVER_PORT));

const STUDENTS_DATA = [
  {
    id: 1,
    name: "lyhor",
    class: "B",
    results: [
      { topic: "javascript", score: 99 },
      { topic: "english", score: 50 },
      { topic: "sport", score: 33 },
    ],
  },
  {
    id: 2,
    name: "Lanh",
    class: "B",
    results: [
      { topic: "javascript", score: 78 },
      { topic: "english", score: 88 },
      { topic: "sport", score: 88 },
    ],
  },
  {
    id: 3,
    name: "Sophorn",
    class: "A",
    results: [
      { topic: "javascript", score: 70 },
      { topic: "english", score: 50 },
      { topic: "sport", score: 70 },
    ],
  },
];

// 3-  Handle request
app.get("/students/:student_id/scores", (req, res) => {
  let student_id = parseInt(req.params.student_id);

  let toSend = null;
  for (let student of STUDENTS_DATA) {
    if (student.id === student_id) {
      toSend = student.results;
    }
  }
  if (toSend == null) {
    res.status(400);
    res.send("cannot find the studnet for iD " + student_id);
  } else {
    res.send(toSend);
  }
});
