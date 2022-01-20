const hands = ["paper", "rock", "scissors"];
let compScore = 0;
let playerScore = 0;
let compChoice ;

const message = document.querySelector("#msg");
const playerTally = document.querySelector("#playerTally");
const compTally = document.querySelector("#compTally");


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.onclick = () => round("rock");
paperBtn.onclick = () => round("paper");
scissorsBtn.onclick = () => round("scissors");


function compPlay (){
    let randomIndex = getRandomNumber ();
    if (randomIndex == 0) {
        compChoice = hands[0]
    } else if (randomIndex == 1) {
        compChoice = hands[1]
    } else if (randomIndex == 2) {
        compChoice = hands[2]
    } else {
    }
    return compChoice;
}

function getRandomNumber () {
    let random = Math.floor(Math.random() * hands.length);
    if (random == 3) {
        random = getRandomNumber() };
    return random
}

function round (str) {
    let playerChoice = str;
    compPlay();
    if (compScore == 5 || playerScore == 5) {
         return alert ('Refresh page to play again')    
    }
    if (playerChoice == compChoice) {
        message.textContent =`It's a tie! Player ${playerScore}-${compScore} Computer` }   
    else if ((playerChoice == "rock" && compChoice == "scissors") ||
            (playerChoice == "scissors" && compChoice == "paper") ||
            (playerChoice == "paper" && compChoice == "rock")) {
        playerScore++
        playerTally.textContent += "I"
        message.textContent = `You win! Player ${playerScore}-${compScore} Computer`
         
        }
    else if ((playerChoice == "scissors" && compChoice == "rock") ||
            (playerChoice == "paper" && compChoice == "scissors") ||
            (playerChoice == "rock" && compChoice == "paper")) {
        compScore++
        compTally.textContent += "I"
        message.textContent = `You lose! Player ${playerScore}-${compScore} Computer` 
            }
    scoreCheck()
    return
}

function scoreCheck(){
    if (compScore == 5) {
        message.textContent ='Computer wins! Better luck next time';
        compTally.classList.toggle('winner');
    } else if (playerScore == 5) {
        message.textContent ='You win! Great job!';
        playerTally.classList.toggle('winner');
    }
}


/* best of 5 game 

    function bestof5 () {
        for (let i=0; (compScore < 3 && playerScore < 3); i++) {
            round() 
        }
        if (compScore == 3) {
            console.log ('Computer wins! Better luck next time')
        } else if (playerScore == 3) {
            console.log ('You win! Great job')
        }
        console.log('Thanks for playing!')
    }
    */
   /* player choice - cap insensitive 
function playerPlay () {
    let promptPlayer = prompt("Choose rock, paper or scissors?")
    playerChoice = promptPlayer.toLowerCase()
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerChoice
    } else { alert('Invalid choice. You must choose rock, paper or scissors.')
        playerPlay()
    }
}
 */