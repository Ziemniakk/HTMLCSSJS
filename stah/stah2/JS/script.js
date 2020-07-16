function onLoad()
{
    setInterval(update, 100);

}


let x = 0;
function update()
{
    Login = document.getElementById("Login").value;
    Password = document.getElementById("Password").value;
}


const userList = [];







function userLogin(){
if(document.getElementById("Login").value == userList[`user${x}`].login &&
    document.getElementById("Password").value == userList[`user${x}`].password)
{
    alert("zalogowano!");


}
else
{
    document.getElementById("Login").value = "";
    document.getElementById("Password").value = "";
    alert("Nie znam cię!");

}
}

function userRegister(){

    x++;
    userList[`user${x}`] = {login: document.getElementById("newLogin").value, password: document.getElementById("newPassword").value}

    alert("Zarejestrowano!");
    
    document.getElementById("newLogin").value
    document.getElementById("newPassword").value
    
}