const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

const posts = require("./routes/api/posts");

app.use('/api/posts', posts);


app.listen(port, (error) => {
    if(error)
    {
        console.log("Serwer sie nie odpalil!");
    }
    console.log("Serwer działczy:)");
})