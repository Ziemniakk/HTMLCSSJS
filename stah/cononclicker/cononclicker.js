function rules(){
    setInterval(updatecoins, 100);
    setInterval(persecond, 1000);
    }

const coins = {

    cononcoins: 0,

};


const stats = {

    multiplier: 1,
    secmultiplier: 0.1

};

let cost1 = 100;
let cost2 = 120;

function xd(){

    var audio = new Audio("click.mp3" ) ;

    audio.oncanplaythrough = function(){
    audio.play();
    }

    coins.cononcoins += stats.multiplier;
}


function persecond()
{
    coins.cononcoins += stats.secmultiplier;

}


function updatecoins()
{
    coins.cononcoins.toFixed();
    document.getElementById("coins").innerHTML = (`${coins.cononcoins.toFixed(2)}`);
    document.getElementById("multiplier").innerHTML = (`${stats.multiplier.toFixed(2)}`);
    document.getElementById("persecond").innerHTML = (`${stats.secmultiplier.toFixed(2)}`);
    document.getElementById("cost1").innerHTML = (`${cost1.toFixed(2)}`);
    document.getElementById("cost2").innerHTML = (`${cost2.toFixed(2)}`);

}

function upgrade1()
{

    if(coins.cononcoins >= cost1)
    {
        stats.multiplier += 0.25;
        coins.cononcoins -= cost1;
        cost1 *= 1.5;


    }
    else{
        alert("Nie masz kurwa kasy ziomek D:")
    }

}

function upgrade2()
{
    if(coins.cononcoins >= cost2)
    {
        stats.secmultiplier += 0.1;
        coins.cononcoins -= cost2;
        cost2 *= 1.5;


    }
    else{
        alert("Nie masz kurwa kasy ziomek D:")
    }


}

function hideBar(){

    document.getElementById("rightbar").style.display = "none";
    document.getElementById("clickImgContainer").style.cssText = "margin-left: 40%; transition: all 0.5s;";

}
function showBar(){

    document.getElementById("rightbar").style.display = "block";
    document.getElementById("clickImgContainer").style.cssText = "margin-left: 30%; transition: all 0.5s;";


}