// alert("js link worked!!");
var wins = 0;
var losses = 0;
var guesses = 10;
var blanks = 0;

var wordguess = ["rick","morty","beth","squanchy","jerry","wubalubbadubdub","sanchez","szechuan"];

var pcword = "";

var pcwordnum = [];

var inprocess = [];

var lastguess = [];

$(document).ready(function() {

$("#startgame").on("click" , function() {
    pcword = wordguess[Math.floor(Math.random()*wordguess.length)];
    pcwordnum = pcword.split("");
    blanks = pcwordnum.length;
    guesses = 10;
    lastguess = [];
    inprocess = [];

    for (var i=0; i<blanks; i++) {
        inprocess.push("_");
    }

    document.getElementById("word-random").innerHTML = inprocess;
    document.getElementById("wins").innerHTML = "Times you managed to pull it together: " + wins;
    document.getElementById("losses").innerHTML = "Times your brain failed noob: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;

    console.log (pcword);
    console.log (inprocess);

});

function checkletter(letter) {
    
    var isletterinword = false;
    
    for (var i=0; i<blanks; i++){
        if(pcword[i] == letter) {
            isletterinword = true;
            
        }
    }

    if(isletterinword){
        for (var i=0; i<blanks; i++){
            if(pcword[i] == letter) {
                inprocess[i] = letter;
            }
        }
    }

    else {
        lastguess.push(letter);
        guesses--;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
    }
    console.log(inprocess);

    // unhide letters dont repopulate -- Adam


};
document.onkeyup = function(event) {
    var userguess = event.key.toLowerCase();
    console.log(userguess);
    checkletter(userguess);
}

});





    

