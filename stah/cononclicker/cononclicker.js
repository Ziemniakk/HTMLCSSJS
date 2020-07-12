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


    coins.cononcoins += stats.multiplier;

}

function persecond()
{
    coins.cononcoins += stats.secmultiplier;

}


function updatecoins()
{
    coins.cononcoins.toFixed();
    document.getElementById("coins").innerHTML = (`Masz ${coins.cononcoins.toFixed(2)} Cononcoins!`);
    document.getElementById("coins").style = "font-size: 30px; background-color: green;";

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

function upgrade2()
{
    if(coins.cononcoins >= cost2)
    {
        stats.persecond += 0.1;
        coins.cononcoins -= cost2;
        cost2 *= 2;


    }


}



