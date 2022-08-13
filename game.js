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

//Create a function to start the game and let the player choose one option

function getPlayerChoice(){
    playerChoice = window.prompt("Rock, paper, scissors?");
}

function isValidChoice(choice){ //Unused
    return possibleChoices.indexOf(choice) != -1 
}

//Use the function created previously to let the cpu make a choice
//Compare them

function compareChoices(computerChoice,playerChoice){
    if (computerChoice === "rock" && playerChoice === "scissors" ||
        computerChoice === "paper" && playerChoice === "rock" ||
        computerChoice === "scissors" && playerChoice === "paper") {
        cpuPoints += 1
        return "You lose. " + capitalize(computerChoice) + " beats " + capitalize(playerChoice) + "."
    } else if (computerChoice === playerChoice) {
        return "It's a draw. Computer chose " + capitalize(computerChoice) + "."
    } else {
        playerPoints += 1
        return "You win. " + capitalize(playerChoice) + " beats "  + capitalize(computerChoice) + "."
    }
}

//Repeat until round is finished (5 points)


//Test function to see if it's possible to gather data from a prompt (It is lul)
function promptTest(){
    if ((window.prompt("This is a test, do you know that?")) === 'yes') {
        return "great!"
    } else {
        return "this is not supposed to happen"
    }
}

//Add a function for playing the game

function play_rps(){
    getComputerChoice();
    getPlayerChoice();
    return compareChoices(computerChoice,playerChoice.toLowerCase());
}

//Add a function for playing the game for more than one round

function game(rounds){
    for (let roundsPlayed = 0; roundsPlayed < rounds; roundsPlayed++)  {
       console.log(play_rps())
    }
    if (playerPoints < cpuPoints) {
        console.log("\n" + checkScore() + "\n ")
        resetScore()
        return "Game over bro." 
    } else if (playerPoints === cpuPoints) {
        console.log("\n" + checkScore() + "\n ")
        resetScore()
        return "Nobody won."
    } else {
        console.log("\n" + checkScore() + "\n ")
        resetScore()
        return "You win."
    }

}

//Add a function to check final score at the end of a game

function checkScore(){
    return "The final score is " + playerPoints + "-" + cpuPoints
}

//Add a function to reset the score when the game finishes

function resetScore(){
    cpuPoints = 0;
    playerPoints = 0;
}

//Add a function to capitalize a string

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

//New approach (UI Based)

//Let the player choose the number of rounds in a text box after "button-start"
//is pressed

const roundSelector = document.querySelector('.round-selector')

const play = document.querySelector('#button-start')
play.addEventListener('click', () => {
    roundSelector.style.visibility = 'visible'
});

//Gather user input and use it on game() function

//Rework game() function so it doesn't show a prompt asking the user
//to choose an option and instead show 3 buttons on the page

//Display results on the page instead of the console

//Show a button to end the game

//Show initial button selection after the game is finished
