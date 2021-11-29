const express = require("express");
let app = express();
const PORT = 3000;
app.use(express.static("front_end"));

const users = [
  { name: "him", password: "00000" },
  { name: "ronan", password: "11111" },
  { name: "rady", password: "22222" },
  { name: "edouar", password: "33333" },
];
app.listen(PORT, (req, res) => {
  console.log("Server start at Port: " + PORT);
});

app.get("/login", (req, res) => {
  let name = req.query.name;
  let password = req.query.password;

  let isVAlid = false;
  for (let user of users) {
    if (user.name === name && user.password === password) {
      isValid = true;
    }
  }
  res.send(isVAlid);
});

