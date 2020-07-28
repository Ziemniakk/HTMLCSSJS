const mongoose = require('mongoose');
const User = require('./models/user');
const mongourl = "mongodb://localhost:27017/Usersprojekt";

mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
},(error) => {
    if(error)
    {
        console.log(error);
    }
    console.log("Połączono z mongoDB");
})

// User.create({login: "stah", pass: "stah"}, (err) => {
//     if(err) {
//     console.log(err);
//     }
//     else
//     {
//     console.log("SAVED!")
//     }
// })

// User.findOne({login: "DebXDil"}, (err, done) => {
//     if(err)
//     {
//         console.log(err);
//     }
//     else if(done)
//     {
//         console.log("Login zajęty!");
//     }
//     else
//     {
//         console.log("Login wolny!");
//     }
// })
