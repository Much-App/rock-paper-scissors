


const hands = ["paper", "rock", "scissors"]
let compScore = 0
let playerScore = 0


let compChoice 
let playerChoice
/*
function compPlay() {
    compChoice = "paper"
}
*/

function compPlay (){
    let randomIndex = getRandomNumber ()
    if (randomIndex == 0) {
        compChoice = hands[0]
    } else if (randomIndex == 1) {
        compChoice = hands[1]
    } else if (randomIndex == 2) {
        compChoice = hands[2]
    } else {
    }
    return compChoice
}
function getRandomNumber () {
    let random = Math.floor(Math.random() * hands.length)
    if (random == 3) {
        random = getRandomNumber() }
    return random
}

/* player choice - cap insensitive */
function playerPlay () {
    let promptPlayer = prompt("Choose rock, paper or scissors?")
    playerChoice = promptPlayer.toLowerCase()
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerChoice
    } else { alert('Invalid choice. You must choose rock, paper or scissors.')
        playerPlay()
    }
     
}

/* A single round/match
First, tie scenario
Second, all player win scenarios
Third, all player lose scenarios */

function round () {
    playerPlay()
    compPlay()
    if (playerChoice == compChoice) {
        console.log(`It's a tie! Player ${playerScore}-${compScore} Computer`)
        alert (`It's a tie! Player ${playerScore}-${compScore} Computer`)
        } 
    else if ((playerChoice == "rock" && compChoice == "scissors") ||
            (playerChoice == "scissors" && compChoice == "paper") ||
            (playerChoice == "paper" && compChoice == "rock")) {
        playerScore++
        alert (`You win! Player ${playerScore}-${compScore} Computer`)
        return console.log (`You win! Player ${playerScore}-${compScore} Computer`)
        }
    else if ((playerChoice == "scissors" && compChoice == "rock") ||
            (playerChoice == "paper" && compChoice == "scissors") ||
            (playerChoice == "rock" && compChoice == "paper")) {
        compScore++
        alert (`You lose! Player ${playerScore}-${compScore} Computer`)
        return console.log (`You lose! Player ${playerScore}-${compScore} Computer`)
            }
}


/* best of 5 game */

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