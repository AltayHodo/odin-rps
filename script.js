let playerChoice = 0;
let computerChoice = 0;


let addedText = document.createElement('h2')
let result = document.querySelector('#result')
let playerResult = document.querySelector('#playerResult')
let computerResult = document.querySelector('#computerResult')

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        playerChoice = button.textContent;
        getComputerChoice();
        playerResult.textContent = `You Picked: ${playerChoice}`
        computerResult.textContent = `Computer Picked: ${computerChoice}`
        result.textContent = `Result: ${checkWinner()}`
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
            return 'You Win';
        }
    else{
        return 'Computer Wins';
    }
}
