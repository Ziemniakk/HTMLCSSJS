function onLoad()
{
    xde.name = testInput1.value;
    xde.money = testInput2.value;
    setInterval(onLoad, 100);
}


//---------------------------------------------------- 
let x = 0;



const userList = [];

let LoginInput = document.getElementById("Login");
let PasswordInput = document.getElementById("Password");

let newLoginInput = document.getElementById("newLogin")
let newPasswordInput = document.getElementById("newPassword")

LoginInput.addEventListener("keyup", function(event)
{
    if(event.keyCode === 13)
    {
        event.preventDefault();
        
        document.getElementById("Login").click(userLogin());

    }


});


function userLogin(){
if(LoginInput.value == userList[`user${x}`]?.login &&
    PasswordInput.value == userList[`user${x}`]?.password)
{
    alert("zalogowano!");
 

}
else
{
    LoginInput.value = "";
    PasswordInput.value = "";
    alert("Nie znam cię!");

}
}

function userRegister(){


    x++;
    userList[`user${x}`] = {login: document.getElementById("newLogin").value, password: document.getElementById("newPassword").value}

    alert("Zarejestrowano!");
    
    newLoginInput.value
    newPasswordInput.value
    
}

//----------------------------------------------------





let testInput1 = document.getElementById("test");
let testInput2 = document.getElementById("test2");


testInput1.addEventListener("keyup", function(event)
{
    if(event.keyCode === 13)
    {
        event.preventDefault

        document.getElementById("test").click(alert(xde));

    }



})
testInput2.addEventListener("keyup", function(event)
{
    if(event.keyCode === 13)
    {
        event.preventDefault

        document.getElementById("test2").click(alert(+xde));

    }



})


let xde = {
    name: testInput1.value,
    money: testInput2.value,

    [Symbol.toPrimitive](hint){
        
        return hint == "string" ? `name: ${this.name}` : this.money
    }
    
}



let button1 = document.getElementById("1"),
button2 = document.getElementById("2"),
button3 = document.getElementById("3"),
button4 = document.getElementById("4"),
button5 = document.getElementById("5"),
button6 = document.getElementById("6"),
button7 = document.getElementById("7"),
button8 = document.getElementById("8"),
button9 = document.getElementById("9"),
wynik = document.getElementById("wynik");




if(button1.click == true)
{
    alert("XD")
}
if(button2.click == true)
{
    wynik.innerHTML += button1.value;
}
if(button3.click == true)
{
    wynik.innerHTML = button1.value;
}
if(button4.click == true)
{
    wynik.innerHTML = button1.value;
}
if(button5.click == true)
{
    wynik.innerHTML = button1.value;
}
if(button6.click == true)
{
    wynik.innerHTML = button1.value;
}
if(button7.click == true)
{
    wynik.innerHTML = button1.value;
}
if(button8.click == true)
{
    wynik.innerHTML = button1.value;
}
if(button9.click == true)
{
    wynik.innerHTML = button1.value;
}


