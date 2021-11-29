const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("Server running..."));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let status = "GREEN";	// Can be RED YELLOW or  GREEN

app.post("/status", (request, response) => {
  status = request.body.status;
  response.send(status);
});

app.get("/status", (request, response) => {
  response.send(status);
});
