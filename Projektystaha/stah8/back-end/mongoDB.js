const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/mongo-test";


mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

}, (error, result) => {
    if(error)
    {
        console.log("Nie mozna polaczyc z serwerem mongoDB!");
    }
    console.log("Humor gituwa polączenie z mongoDB znalezione!");

})