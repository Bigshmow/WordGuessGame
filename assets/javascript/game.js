// alert("js link worked!!");
var wins = 0;
var losses = 0;
var guesses = 10;
var blanks = 0;

var wordguess = ["rick","morty","beth","squanchy","jerry","wubalubbadubdub","sanchez","szechuan"];

var pcword = [""];

var pcwordnum = [];

var inprocess = [];

var lastguess = [];


function startgame () {
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

    console.log (inprocess);

}


console.log (pcword);
startgame ();

