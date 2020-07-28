const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongourl = "mongodb://localhost:27017"
const port = 3001;

mongoose.connect(mongourl, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
      useCreateIndex: true
}, (error, result) => {
    if(error){
        console.log("Nie mozna polaczyc z baza danych!");
    }
    console.log("mongoose Git działczy!");
});

const User = mongoose.model('User', {
    name: String,
    surname: String,
    age: {
        type: Number,
        require: true,
    },
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, (error) => {
    if(error)
    {
        console.log("Nie mozna postawic serwera :(");
    }
    console.log(`Serwer działczy na: http://localhost:${port}`)
})

app.get("/users", async (req, res) => {
    if(req)
    {
        console.log("Ktos wbija na serwera!");
    }
    const users = await User.find({}).exec();

    res.json(users);
})

app.post("/users", async(req, res) => {
    const{
        name,
        surname,
        age,
    } = req.body;

    const user = new User({
        name,
        surname,
        age,
    })

    await user.save();

    res.end();
})


