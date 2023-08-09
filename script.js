
let playerWCounter = 0;
let botWCounter = 0;


do{
let playerSelection = prompt("Rock, Paper, Or Scissor?").toLowerCase();

let botSelection = null;
function getComputerChoice(){
let botChoice = Math.floor(Math.random()*(3 - 1) + 1);
let botChoiceString = null;
let winLose = null;

switch (botChoice){
    case 1 :
        botChoiceString = "rock";
        break;
    case 2 :
        botChoiceString = "paper";
        break;  
    case 3:
        botChoiceString = "scissor";
        break;
}
    return botChoiceString;
};

botSelection = getComputerChoice();



if(playerSelection == "rock" && botSelection == "scissor"){
    playerWCounter++;
    alert("You = " + playerSelection + "" + " VS " + "" + "Bot = " + botSelection+ "" + "" + " You Win! " + "" +   " Score Player = " + playerWCounter + " Score Bot = " + botWCounter);
}else if(playerSelection == "rock" && botSelection == "paper"){
    botWCounter++;
    alert("You = " + playerSelection + "" + " VS " + "" + "Bot = " + botSelection+ "" + "" + " Bot Wins!" + "" + " Score Player = " + playerWCounter + " Score Bot = " + botWCounter);
}else if(playerSelection =="rock" && botSelection =="rock"){
    alert("You = " + playerSelection + "" + " VS " + "" + "Bot = " + botSelection+ "" + "" + " Tie!"  + "" +  " Score Player = " + playerWCounter + " Score Bot = " + botWCounter);
}else if(playerSelection == "paper" && botSelection == "rock"){
    playerWCounter++;
    alert("You = " + playerSelection + "" + " VS " + "" + "Bot = " + botSelection+ "" + "" + " You Win!" + ""  + " Score Player = " + playerWCounter + " Score Bot = " + botWCounter);
}else if(playerSelection == "paper" && botSelection == "scissor"){
    botWCounter++;
    alert("You = " + playerSelection + "" + " VS " + "" + "Bot = " + botSelection+ "" + "" + " Bot Wins!" + ""   + " Score Player = " + playerWCounter + " Score Bot = " + botWCounter);
}else if(playerSelection == "paper" && botSelection == "paper"){
    alert("You = " + playerSelection + "" + " VS " + "" + "Bot = " + botSelection+ "" + "" + " Tie!" + ""  + " Score Player = " + playerWCounter + " Score Bot = " + botWCounter);
}else if(playerSelection == "scissor" && botSelection == "paper"){
    playerWCounter++;
    alert("You = " + playerSelection + "" + " VS " + "" + "Bot = " + botSelection+ "" + "" + " You Win!" + ""   + " Score Player = " + playerWCounter + " Score Bot = " + botWCounter);
}else if(playerSelection == "scissor" && botSelection == "rock"){
    botWCounter++;
    alert("You = " + playerSelection + "" + " VS " + "" + "Bot = " + botSelection+ "" + "" + " Bot Wins!" + ""  + " Score Player = " + playerWCounter + " Score Bot = " + botWCounter);
}else if(playerSelection == "scissor" && botSelection == "scissor"){
    alert("You = " + playerSelection + "" + " VS " + "" + "Bot = " + botSelection+ "" + "" + " Tie!" + "" + " Score Player = " + playerWCounter + " Score Bot = " + botWCounter);
}

}while(true);

