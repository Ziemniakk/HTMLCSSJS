const express = require('express');
const port = 3000;

const app = express();

app.get("/", function(req, res) {


    res.end("JD!");
});

app.listen(port, (error) => {
    if(error)
    {
        console.log("COŚ JEST NIE TAK!");
    }
    console.log("SERWER DZIAŁA!");
});
