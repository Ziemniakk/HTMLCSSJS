require("./back-end/serwer");
const User = require("./back-end/models/user");


const createUser = async (data) =>{
    try
    {
        const user = new User(data)
        await user.save();

        console.log(user)
    }
    catch(error)
    {
        console.log(error);
    }
}

createUser({
    name: "Kurwa jebana",
})