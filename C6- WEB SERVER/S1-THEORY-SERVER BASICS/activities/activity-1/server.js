const express = require("express");
const app = express();

const PORT = 3000;

// 1- the app is listening on PORT
app.listen(PORT, () => {
  console.log(" listening on port  ! " + PORT);
});

// 2- Listen to GET on the root path :
app.get("", (req, res) => {
  console.log("WARNING : "  +req.ip + " is calling you !");	
	
  let message= "Hello " + req.ip + " it 's ronan";
  res.send(message);		// send something to the client
});

