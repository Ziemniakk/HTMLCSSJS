function rules(){
    setInterval(persecond, 1000);
    setInterval(checkcoins, 100);
    }

const coins = {

    cononcoins: 0,

};
const stats = {

    multiplier: 1,
    secmultiplier: 0.1,

};

let cost1 = 100;

function xd(){


    coins.cononcoins += stats.multiplier;

}


function checkcoins()
{
    document.getElementById("coins").innerHTML = (`Masz ${coins.cononcoins} Cononcoins!`);
    document.getElementById("coins").style = "font-size: 30px; cursor: pointer; background-color: green;";

}

function upgrade1()
{

    if(coins.cononcoins >= cost1)
    {
        stats.multiplier += 0.25;
        coins.cononcoins -= cost1;
        cost1 *= 2;


    }

}

function persecond()
{
    coins.cononcoins += stats.secmultiplier;

}



