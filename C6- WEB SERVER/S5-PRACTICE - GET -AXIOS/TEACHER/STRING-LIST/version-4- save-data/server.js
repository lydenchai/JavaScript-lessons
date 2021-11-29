const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// We serve assets on /public
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("server started");
});

app.get("/items", (req, res) => {
  console.log("receiving /items route");

  // 1- read data
  let items = JSON.parse(fs.readFileSync("data.json"));

  // 2- send data
  res.send(items);
});
