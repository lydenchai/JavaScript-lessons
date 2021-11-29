const express = require("express");
const app = express();
const PORT = 3000;

let items = ["baba", "bibi"];

// We serve assets on /public
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("server started");
});

app.get("/items", (req, res) => {
  console.log("receiving /items route");
  res.send(items);
});
