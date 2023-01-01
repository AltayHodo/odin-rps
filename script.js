let playerChoice = 0;
let computerChoice = 0;
let playerWins = 0;
let computerWins = 0;

let addedText = document.createElement('h2')
let result = document.querySelector('#result')
let playerResult = document.querySelector('#playerResult')
let computerResult = document.querySelector('#computerResult')
let playerDisplay = document.querySelector('#playerDisplay')
let computerDisplay = document.querySelector('#computerDisplay')


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        playerChoice = button.textContent;
        getComputerChoice();
        playerResult.textContent = `You Picked: ${playerChoice}`
        computerResult.textContent = `Computer Picked: ${computerChoice}`
        result.textContent = `Result: ${checkWinner()}`
        playerDisplay.textContent = `Your wins: ${playerWins}`;
        computerDisplay.textContent = `Computer wins: ${computerWins}`;
        if(playerWins == 5){
            alert("You won! Good job :D");
            playerWins = 0;
            computerWins = 0;
            playerDisplay.textContent = `Your wins: ${0}`;
            computerDisplay.textContent = `Computer wins: ${0}`;
        }
        if(computerWins == 5){
            alert("You lost loser lmao");
            playerWins = 0;
            computerWins = 0;
            playerDisplay.textContent = `Your wins: ${0}`;
            computerDisplay.textContent = `Computer wins: ${0}`;
        }
    })
})

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3) + 1;
    switch(rand){
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;
    }
}

function checkWinner(){
    if(computerChoice == playerChoice){
        return 'Tie';
    }
    if(
        (playerChoice == 'Rock' && computerChoice == 'Scissors') ||
        (playerChoice == 'Paper' && computerChoice == 'Rock') ||
        (playerChoice == 'Scissors' && computerChoice == 'Paper')
        ){
            playerWins++;
            return 'You Win';
        }
    else{
        computerWins++;
        return 'Computer Wins';
    }
}
