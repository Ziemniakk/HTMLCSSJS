/*-----let user = 'kox', age = 15, message = 'siema';------*/


/*-------------
let hello = 'Hello world!';

let message;

message = hello


alert(message);
alert(hello);

-------------*/


/*-------------
let $ = 1;
let _ = 2;

alert($ + _); // 3
-------------*/


/*-------------
const COLOR_RED = "#000";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;

alert(color);

-------------*/


/*-------------
let admin, name = 'John';

admin = name;

alert(admin);
-------------*/


/*-------------
let name ="John";

alert(`Hello , ${name}!`);

alert(`the result is ${1 + 2}`)
/*-------------


/*-------------
let age = prompt('How old are you?', 0);

alert(`You are ${age} years old`);
*/


/*-------------
let czykrul = confirm(`Ty krul?`)
if(czykrul==true){
alert ( `proste ze tak` );

let nazwakrula = prompt(`A jak się nazywasz królu?`)

alert(`Nazywasz się Król ${nazwakrula}`)

let birthdate = prompt(`A którego roku się urodziłeś hmm?`)

let czyprawda = confirm(`Czyli, że jesteś KRÓLEM nazywasz się ${nazwakrula} i Urodziłeś się ${birthdate} roku?`)

if(czyprawda==true)
{

    alert(`I wzystko jasne!`)

}
else if(czyprawda==false)
{

    alert(`Oj coś się chyba pomyliło`)

}
}
if(czykrul==false)
{

    alert(`oj byczku`);

}
/*-------------


/*-------------
let wybor = true;

wybor = String(wybor);

alert(typeof wybor);
/*-------------


/*-------------
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

alert(`a wynosi ${a}, b wynosi${b}, c wynosi${c}, d wynosi ${d}`);
/*-------------


/*-------------
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 12
*/


/*-------------
let age = prompt('How old are u?',18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What na unusual age!';

alert(message);
-------------*/


/*
let siemanko = confirm('Siemanko to jest to samo co siema czy nie?', '?');

(siemanko == true) ?
    alert('Tak tak') : alert('Źle zią');
*/


/*
let ask = prompt('What is the “official” name of JavaScript?');

if(ask == "ECMAScript")
{
    alert('Right');
}
else
{
    alert('Didn’t know? ECMAScript!');
}
*/


/*
let number = prompt('Siemano dawaj numerek czy cos')

if(number < 0)
{
    alert('Mniejsza niz 0');
}
else if(number > 0)
{
    alert(`Wieksza niz 0`);
}
else if(number == 0)
{
    alert('elo ale 0 dales kox');
}
*/


/*
let result = (a + b < 4) ? 'Below' : 'Over';
*/


/*
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
*/


/*
let i = 0;

while(i<3)
{
    alert(i);
    i++

}
*/


/*
let hour = 12;
let isweekend = true;

if(hour < 10 || hour > 18 || isweekend==true)
{
    alert('siema');
}
else
{
    alert('pal gumsona');
}
*/


/*
let firstName = prompt('Jak masz na imię?')
let lastName = prompt('Jak masz na nazwisko?')
let nickName = prompt('Jaki masz nick?')

alert(firstName || lastName || nickName || "Ale z ciebie anonimus nic nie podałeś :O");
*/


/*
let age = prompt('Ile masz lat?')

if(age >= 14 && age <= 90)
{

        alert('gume pal?')

}
*/


function Logowanie(){
let login = prompt('LOGIN:');

if(login == "Admin")
{

    let password = prompt('HASŁO:');
    if(password == "krul")
    {
        alert('Siemano krul');
        console.log("Zalogowano!!");
    }
    else if(password == '' || password == "")
    {
        alert('Anulowano.');    }
    else
    {
        alert('Zle Haslo!');
    }
}
else if(login == '' || login == "")
{
     alert ('Anulowano')
}
else
{
    alert('Nie znam cię');
}


}


/*
let jd = "cześć";
let x = 0;

while(x < 3)
{
    alert(jd);
    x++
}
*/


/*
let zmienna = "test";

for(let i = 2; i < 5; i++)
{

    alert(zmienna);

}
*/





