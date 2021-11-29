const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => console.log("Server running..."))

app.use(express.static('public'))
app.use(express.json());

let colors = [];
app.get('/color', (request, response) => { 
    response.send(colors);
});

app.post('/color', (request, response) => {
    colors[0] = request.body;
    response.send(colors);
});
