


const hands = ["paper", "rock", "scissor"]
let choice 

function compPlay (){
    let randomIndex = getRandomNumber ()
    if (randomIndex == 0) {
        choice = hands[0]
    } else if (randomIndex == 1) {
        choice = hands[1]
    } else if (randomIndex == 2) {
        choice = hands[2]
    } else {
    }
    return choice
}

function getRandomNumber () {
    let random = Math.floor(Math.random() * hands.length)
    if (random == 3) {
        random = getRandomNumber() }
    return random
}


