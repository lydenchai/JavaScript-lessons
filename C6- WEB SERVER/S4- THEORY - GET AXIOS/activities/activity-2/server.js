const express = require("express");
const app = express();
const PORT = 3000;

// We serve assets on /public
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("server started");
});

// TODO : Get the route "value" and return the value "HELLO"
