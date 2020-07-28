require("./db/mongoose");
const User = require('./db/models/user');



const createuser = async (data) =>{
    try
    {
        const user = new User(data)
        await user.save()
    
        console.log(user)
    } catch(error)
    {
        console.log(error);
    }
//     user.save().then(() => {
//         console.log(user);
//     }).catch(error => {
//         console.log("cos nie tak!");
// })
}
const findUsers = async () =>{
    try{
        const users = await User.find({});
        console.log(users)
    } catch(error){
        console.log(error);
    }
}

createuser({
    name: "Steve",
})
