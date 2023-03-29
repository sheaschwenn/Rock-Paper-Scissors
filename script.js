// Pseudo code 
// prompt user Choose R P or S 
// store input from user
// randomly generate value R P or S for computer player 
// store computer value 
// create winning losing and tie situations 
// compare user input and computer 
// alert who won 
// depending on outcome input into an array, won, lost, tied increase by one
// alert play again to take user back to main screen 

var RPS = ["R", "P", "S"];

// var playAgain = confirm("Do you want to play again?")
var tie = 0;
var win = 0;
var lose = 0;


function randomGen(){
    var randomNum = Math.floor(Math.random() * 3);
   return RPS[randomNum];
}
var computer = randomGen();

function game(){
    var choose = prompt(" Choose R, P, or S");
if((choose === "R" && computer === "R") || (choose === "P" && computer ==="P")|| (choose === "S" && computer ==="S")){
    alert("You have tied!");
    tie = tie+1;
}

else if((choose === "R" && computer === "S") || (choose === "P" && computer ==="R")|| (choose === "S" && computer ==="P")){
    alert("You have Won!");
    win = win+1;
    
   
}
// else((choose === "R" && computer === "P") || (choose === "P" && computer ==="S")|| (choose === "S" && computer ==="R")) {
    else{
    alert("You have lost!");
    lose = lose+1;
    
}

var score = alert("Wins=" + win+ "Ties = "+ tie+"Loses = "+lose);

var again = confirm("Do you want to play again?");
if (again){
    game();
}
}
game();





