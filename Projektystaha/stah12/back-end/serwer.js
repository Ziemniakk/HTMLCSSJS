require('./mongoDB/mongoose');
const User = require('./mongoDB/models/user')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;

const app = express();

app.set("view options", {layout: false});
app.use(express.static('../front-end'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render("index")
})

app.get('/register', (req, res) => {
    res.redirect('./index.html')
})

app.post('/register', (req, res) => {

        User.findOne({login: req.body.newlogin}, (err, done) => {
        if(err)
        {
            console.log(error);
        }
        else if(done)
        {
            console.log("Login Zajety!!")
            res.redirect('./index.html')
        }
        else
        {
            User.create({login: req.body.newlogin, pass: req.body.newpassword}, (err, result) => {
            if(err) {
            console.log(err);
            res.redirect('./index.html')
            }
            else
            {
            console.log(`Dodano nowego uzytkownika:${result}`)
            res.redirect('./index.html')

            // res.end(`Zarejestrowano! Twoj login to:${result.login}, a ID:${result._id}`)
            }
            })
        }


    })
})
app.post('/login', (req, res) => {
    User.findOne({login: req.body.ulogin, pass: req.body.upassword}, (err, result) => {
    if(err)
    {
        console.log(err);
    }
    else if(result)
    {
        console.log("Ktos sie zalogowal!");
        res.send(`Czesc, ${req.body.ulogin} Czy admin:${result.isAdmin}  Czy Premium:${result.premium}`);
        
    }
    else
    {
        console.log("Ktos probowal sie zalogowac!");
        res.send("Zly login uzytkownika lub haslo!");
    }

    })
})





app.listen(port, (error) => {
    if(error)
    {
        console.log(error);
    }
    console.log("Serwer dziala!");
})


