
let playerWCounter = 0;
let botWCounter = 0;
let botSelection = null;
let round = document.querySelector('.round-num')
let playerSelection = null;
let gameIsOver = false;


let rock = document.querySelector("#player-rock");

let test = document.querySelector("test");

let instruction = document.querySelector('#instruction');

let paper = document.querySelector('#player-paper');

let scissor = document.querySelector('#player-scissor');
let instructiontext = document.querySelector('#instruction');

let roundNum = document.querySelector('#round-num');

let selections = document.querySelectorAll('.selection');
rock.addEventListener('click', () => {
    instructiontext.innerText = "You picked Rock";
    playerSelection = 'rock';
    valiDateWinLose();
    selections.forEach((selection) => {
        selection.classList.add('unclickable');
    });
});
paper.addEventListener('click', () => {
    instructiontext.innerText = "You picked paper";
    playerSelection = 'paper';
    valiDateWinLose();
    selections.forEach((selection) => {
        selection.classList.add('unclickable');
    });
});

scissor.addEventListener('click', () => {
    instructiontext.innerText = "You picked scissor"
    playerSelection = 'scissor';
    valiDateWinLose();
    selections.forEach((selection) => {
        selection.classList.add('unclickable');
    });
});

let continuebtn = document.querySelector('#buttonContinue');

continuebtn.addEventListener('click', () => {
    continuebtn.classList.remove('done')
    document.getElementById('selection-bot').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3OGN3UZFf9armn77UNXiDloeif5LSnmcWqf1h98&s"
    playerSelection = null;
    botSelection = null;
    botpick.innerText= "";
    instructiontext.innerText = "Make A Selection!"
    selections.forEach((selection) => {
        selection.classList.remove('unclickable');
    });
})

let botpick = document.querySelector('#botpick');

function getComputerChoice(){
    let botChoice = Math.floor(Math.random()*(4 - 1) + 1);
    let botChoiceString = null;
    
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
    botpick.innerText = "Bot Picked " + botChoiceString;
    return botChoiceString;
};



function valiDateWinLose(){
botSelection = getComputerChoice();
switch(botSelection){
    case "rock":
        document.getElementById('selection-bot').src="https://img.icons8.com/emoji/12x/rock-emoji.png"
        break;
    case "paper":
        document.getElementById('selection-bot').src="https://cdn-icons-png.flaticon.com/512/3731/3731553.png"
        break;
    case "scissor":
        document.getElementById('selection-bot').src="https://static.vecteezy.com/system/resources/previews/010/366/281/original/scissor-icon-transparent-free-png.png  "
        break;
}


let botScore = document.querySelector('.bot-score-text')

let playerScore = document.querySelector('.player-score-text')





if(playerSelection == "rock" && botSelection == "scissor"){
    playerWCounter++;
    playerScore.innerHTML = "Player Score : " + playerWCounter;
}else if(playerSelection == "rock" && botSelection == "paper"){
    botWCounter++;
    botScore.innerHTML = "Bot Score : " + botWCounter;
}else if(playerSelection =="rock" && botSelection =="rock"){

}else if(playerSelection == "paper" && botSelection == "rock"){
    playerWCounter++;
    playerScore.innerHTML = "Player Score : " + playerWCounter;
}else if(playerSelection == "paper" && botSelection == "scissor"){
    botWCounter++;
    botScore.innerHTML = "Bot Score : " + botWCounter;
}else if(playerSelection == "paper" && botSelection == "paper"){
}else if(playerSelection == "scissor" && botSelection == "paper"){
    playerWCounter++;
    playerScore.innerHTML = "Player Score : "   + playerWCounter;
}else if(playerSelection == "scissor" && botSelection == "rock"){
    botWCounter++;
    botScore.innerHTML = "Bot Score : " + botWCounter;
}else if(playerSelection == "scissor" && botSelection == "scissor"){
}

continuebtn.classList.add('done');
if(playerWCounter == 5 || botWCounter == 5){
    gameIsOver = true;
    if(playerWCounter == 5){
        alert("You Won!")
        location.reload();

    }
    if(botWCounter == 5){
        alert("Bot Wins!")
        location.reload();
    }
}
};






