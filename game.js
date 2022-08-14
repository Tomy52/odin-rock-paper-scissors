//Create an array with all the possible choices

let possibleChoices = ["rock","paper","scissors"]

//Create two variables, one for the player's choice and another for the cpu.

let computerChoice;
let playerChoice;

//Create two variables for points, one for the player and another for the cpu. Initial value will always be zero

let playerPoints = 0;
let cpuPoints = 0;

//Create a function to let the computer choose one option randomly

function getComputerChoice(){
    let randomElement = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    computerChoice = (randomElement);
}

//Add a function to check final score at the end of a game

function checkScore(){
    return "The final score is " + playerPoints + "-" + cpuPoints
}

//Add a function to capitalize a string

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

//New approach (UI Based)

const choiceButtons = document.querySelector('.choice-buttons')

const scoreboard = document.querySelector('.scoreboard')
const score = document.querySelector('#score')
const result = document.querySelector('#result')

const play = document.querySelector('#button-start')
play.addEventListener('click', () => {
    play.style.display = 'none'
    choiceButtons.style.display = 'inline'
    scoreboard.style.display = 'block'
    score.textContent = `Current score is ${playerPoints} - ${cpuPoints}.`
});

function resetScore_new(){
    cpuPoints = 0;
    playerPoints = 0;
    score.textContent = ''
    play.style.display = 'inline'
    resetScoreBtn.style.display = 'none'
}

const resetScoreBtn = document.querySelector('#button-reset')
resetScoreBtn.addEventListener('click', () => {
    resetScore_new()
});

const rock = document.querySelector('#button-rock')
const paper = document.querySelector('#button-paper')
const scissors = document.querySelector('#button-scissors')

rock.addEventListener('click', () => {
        console.log(play_rps_new('rock'));
    });
    
paper.addEventListener('click', () => {
        console.log(play_rps_new('paper'));
    });
    
scissors.addEventListener('click', () => {
        console.log(play_rps_new('scissors'));
    });


function compareChoices_new(computerChoice,playerChoice){
    if (computerChoice === "rock" && playerChoice === "scissors" ||
        computerChoice === "paper" && playerChoice === "rock" ||
        computerChoice === "scissors" && playerChoice === "paper") {
        cpuPoints += 1
        score.textContent = `Current score is ${playerPoints} - ${cpuPoints}.`
        result.style.color = 'red'
        result.textContent = "You lose. " + capitalize(computerChoice) + " beats " + capitalize(playerChoice) + "."
    } else if (computerChoice === playerChoice) {
        score.textContent = `Current score is ${playerPoints} - ${cpuPoints}.`
        result.style.color = 'grey'
        result.textContent = "It's a draw. Computer chose " + capitalize(computerChoice) + "."
    } else {
        playerPoints += 1
        score.textContent = `Current score is ${playerPoints} - ${cpuPoints}.`
        result.style.color = 'green'
        result.textContent = "You win. " + capitalize(playerChoice) + " beats "  + capitalize(computerChoice) + "."
    }
}

function play_rps_new(choice){

    if (playerPoints < 5 && cpuPoints < 5){
        playerChoice = choice
        getComputerChoice();
        return compareChoices_new(computerChoice,playerChoice.toLowerCase());
    } else if (playerPoints === 5) {
        score.textContent = `You won!`
        result.textContent = ''
        choiceButtons.style.display = 'none'
        resetScoreBtn.style.display = 'inline'
    } else {
        score.textContent = `You lost!`
        result.textContent = ''
        choiceButtons.style.display = 'none'
        resetScoreBtn.style.display = 'inline'
    }
}

//Display results on the page instead of the console

//Show a button to end the game

//Show initial button selection after the game is finished


//Basicamente hay que reimplementar todo porque lo de arriba esta mal
//Hay que hacer que el juego empiece a correr recien cuando se escoje una opcion
//Y no antes. Asì cuando elegis alguna opcion, la compare con la de la pc y te
//Asigne puntos. El sistema de rondas no sirve en este caso, se maneja por puntuacion
//Cuando llega a 5, ganas.