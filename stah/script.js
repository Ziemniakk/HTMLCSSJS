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
    do
    {
      var password = prompt('HASŁO');

      if(password == "krul")
      {
          alert('Siemano krul');
          console.log("Zalogowano!!");
          break;
      }
    } while(password == "" || password != null);
}
else if(login == 'easteregg')
{

    window.location=("https://31337.pl/")

}
else if(login == null)
{
     alert ('Anulowano')
}
else 
{
    alert('Nie znam cię, narka!');
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

function petla(){
for(let i = 2; i < 11; i++)
{
    alert(i);

}

}


/*
let sum = 0;

while(true)
{

    let value = +prompt("Enter a number", '')

    if(!value) break;

    sum += value;



}
alert(`Sum: ` + sum);*/


/*
let i = -1;
while(i < 3)
{

    i++;
    alert(`number ${i}!`);

}
*/

function kalkulator()
{
    let xd = confirm("Chcesz cos policzyć?")
    if(xd == true)
    {
        let b = +prompt("1Liczba: ");
        let c = +prompt("2Liczba: ");
        let a = prompt("Co chcesz zrobić? 1- Dodawanie, 2- Odejmowanie");

        switch(a)
        {
            case '1': 
                alert(b+c);
            break;
    
            case '2':
                alert(b-c);
            break;
           /* case null || undefined || "" || '' || `` || false || 0:
                alert("Kurwa ale wpisz cos japierdole nie wiem")
            break;*/
            default:
                alert('pal wroty nie zrobie tego ok? dzieki');
    }
    }
}
/*
let browser = prompt("Jaka masz przeglo?")

if(browser == 'Edge') {
    alert("Masz edge'a!")}
else if(browser == 'Chrome'){
    alert("Masz Chrome'a!")}
else if(browser == "Firefox"){
    alert("Masz Firefoxa")}
else if(browser == "Safari"){
    alert("Masz Safari")}
else if(browser == "Opera"){
    alert("Masz Opere")}
else if(browser == null){
    alert("Mmm nie chcesz powiedzieć?")}
else{alert("nie mozesz nic nie miec xd")}

*/


/*
let browser = prompt("JD?");

if(browser == 'Edge')
{

    alert("masz edge'a!")

}
else if(browser == 'Firefox' || browser == 'Opera' || browser == 'Chrome' || browser == 'Safari')
{
    console.log('xd?')
    alert("masz od nas helpa!")

}
else if(browser == null)
{

    alert("Nie podawaj jak nie chcesz:p")

}
else
{

    alert("ojojoj co to jest?")

}
*/


/*


    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }
  */

/*
let a = +prompt('a?', '');

switch(a)
{
    case 0:
    alert( 0 );
    break;
    case 1:
    alert( 1 );
    break;
    case 2:
    case 3:
    alert( '2,3');
    break;
}
*/


function kalkulator1(){
    let x = confirm("Chcesz cos podzielic/pomnożyć?")

    if(x == true){
    let c = prompt("Co chcesz zrobić? 1- Dzielenie 2- Mnożenie")
    
    let a = +prompt("1 liczba: ")
    let b = +prompt("2Liczba: ")

    switch(c)
    {
        case '1':
            alert(a/b);
        break;
        case '2':
            alert(a*b);
        break;
        default:
            alert("we pal gume");
        break;
    }

    }
}

/*
function ask(question, yes, no) // Funkcja ask(pytanie, tak, nie) - jeżeli przy pytaniu wybrane yes
{
    if(confirm(question)) yes()
    else no();
}

function showOk()
{
    alert('OK');
}

function showCancel()
{

    alert('kansel')

}

ask("Zgadzasz się?", showOk, showCancel)
*/

function test2()
{
    function jd(question, tak, nie)
    {
        if(confirm(question)) tak()
        else nie();
    }

    jd("TAK CZY NIE?", takk, niee)

    function takk()
    {
        alert("TAK!");
    }
    function niee()
    {
        alert("NIE!!");
    }
}

//            KOPIOWANIE FUNKCJI "let xd = powiedz;" oraz wywołanie skopiowanej funkcji
function say(){
function powiedz()
{
    alert("hello")
}

let xd = powiedz;
xd();
powiedz();
}
// ---------------------------------------------------------------------------------


/*            Modyfikacja zmiennej przez funkcję!
function AKSODSKSAOPD()
{
let username = 'Kozak'; // 

function tescik()
{
    username = 'Bob';

    let message = `Hello ${username}`;

    alert(message);

}

alert(username);

tescik();

alert(username);
}
//---------------------------------------*/


/*            PRZEKAZYWANIE DANYCH DO FUNKCJI ZA POMOCĄ 2 PARAMETRÓW
function showmessage(from, text){

    alert(from + ": " + text);

}

showmessage("Disstream", "JD");
showmessage("TEZ DISSTREAM", "TEZ JD");
*/


