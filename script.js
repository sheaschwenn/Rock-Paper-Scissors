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
var choose = prompt(" Choose R, P, or S");
var tie = 0;
var win = 0;
var lose = 0;

function randomGen(){
    var randomNum = Math.floor(Math.random() * 3);
   return RPS[randomNum];
}
var computer = randomGen();
if((choose === "R" && computer === "R") || (choose === "P" && RPS[randomNum] ==="P")|| (choose === "S" && RPS[randomNum] ==="S")){
    alert("You have tied!");
    tie = tie+1;
    alert(tie);
}
