require("./back-end/mongoDB");

const express = require('express');
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    if(req)
    {
        console.log("ktos wbija na xgłówną!");
    }
    res.render("index");
})

app.get("/kontakty", (req, res) => {
    if(req)
    {
        console.log("ktos wbija na kontakty!");
    }
    res.render("kontakty");
})



app.listen(port , (error) =>{
    if(error)
    {
        console.log("Nie mozna odpalic serwera D:!");
    }
    console.log("Serwer działa!");
})