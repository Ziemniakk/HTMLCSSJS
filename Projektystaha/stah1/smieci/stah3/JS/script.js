
function dodaj(num){
    document.calc.textview.value = document.calc.textview.value+num
    let audio = new Audio("click.mp3");

    
    audio.oncanplaythrough = function(){
    audio.play();
    }


}

function c()
{
    document.calc.textview.value = '';
    let audio = new Audio("click.mp3");

    
    audio.oncanplaythrough = function(){
    audio.play();
    }

}

function cofnij(){
    let x = document.calc.textview.value
    document.calc.textview.value = x.substring(0, x.length-1);

    let audio = new Audio("click.mp3");

    
    audio.oncanplaythrough = function(){
    audio.play();
    }


}