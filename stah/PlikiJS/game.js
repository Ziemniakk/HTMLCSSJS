const character = {

    name: undefined,
    exp: 0,
    lvl: 1,

}


if(character.exp >= 100)
{
    character.lvl++;

}



character.name = prompt("Nazwij swoją postać!");

alert(`Twoja postać nazywa się: ${character.name}`)

function showLvl()
{
    alert(`Masz ${character.exp} Expa! Lvl wynosi: ${character.lvl}`);
}

function addExp()
{  /* if(character.exp >= 100)
    {
        character.exp -= 50;
    }*/
    character.exp += 50;
}

function reset()
{

    if(character.exp >= 100)
    {
        character.lvl++;
        character.exp -= 100;

    }
    else{alert("Masz za mało expa by wykupić poziom!");}


}
/*function reset(){

    do{
        if(character.exp == 100)
        {
            character.lvl++;
            character.exp = 0;
        }

    }while(character.exp == 100);

}


*/







alert("Nazwy przedmiotów w sklepie pisz z małej litery ok? np. apple a nie Apple bo kurwa nie chce mi sie tego robic zeby bylo inaczej ok? zajety jestem.")
alert("A i ten spokojnie ja wiem, ze po dostawie w sklepie jak znowu wezmiesz apple to pisze, ze masz jedno jabłko wiec nie pisac ok?")
const shelf = {

    apple: "apple",
    orange: "orange"

}

const inventory = {

    slot1: "",
    slot2: "",
}

function showEQ()
{

    alert(`W plecaku masz: ${inventory.slot1},${inventory.slot2}`)



}


function take(){

let choice = prompt("What do you want to take from the shelf? We have 1-orange and 1-apple")

switch(choice){

    case shelf.apple:
        delete shelf.apple;
        inventory.slot1 = "apple"
        alert("You've got apple");
    break;
    case shelf.orange:
        delete shelf.orange;
        inventory.slot2 = "orange"
        alert("You've got orange!");
    break;
    default: alert("We don't have this D:")

}}

function delivery()
{

    let choice2 = confirm("Dostarczamy towar?")

    switch(choice2){
        case true:
            shelf.apple = "apple";
            shelf.orange = "orange";
            alert("DOSTARCZONO!")
        break;
        default:
    }
}
