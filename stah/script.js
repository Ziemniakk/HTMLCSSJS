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


/*
let name ="John";

alert(`Hello , ${name}!`);

alert(`the result is ${1 + 2}`)
*/


/*
let age = prompt('How old are you?', 0);

alert(`You are ${age} years old`);
*/


/*
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
*/


/*
let wybor = true;

wybor = String(wybor);

alert(typeof wybor);
*/


/*
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

alert(`a wynosi ${a}, b wynosi${b}, c wynosi${c}, d wynosi ${d}`);
*/


/*
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 12
*/


let age = prompt('How old are u?',18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What na unusual age!';

alert(message);

