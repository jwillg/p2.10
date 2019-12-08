var compChoice;
var compare = "TEST TEXT";
var playTier = 4;
var compTier = 4;
var TIER_TITLE = "Tier";
var checkWin = false;
var playerChoice = "Rock";
var compChoiceN = 0;
var tieBreaker = 0;

function onLoad() {
    document.getElementById("CTier").innerHTML = TIER_TITLE + " " + compTier;
    document.getElementById("PTier").innerHTML = TIER_TITLE + " " + playTier;
    document.getElementById("RoundText").innerHTML = "Text is here";
    return 0;
}

function startRound() {
    // compChoiceN = Math.random() % 3;

    let choiceArray = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random()*choiceArray.length);
    compChoice = choiceArray[randomNum];
    console.log(compChoice);

    decide(playerChoice, compChoice);

    if (checkWin == true) {
        if (playTier == 8) {
            document.getElementById("RoundText").innerHTML = "Game over! You win!";
        }
        else if (playTier == 0) {
            document.getElementById("RoundText").innerHTML = "Game over! You lose!";
        }
        else if (compTier == 0) {
            document.getElementById("RoundText").innerHTML = "Game over! You win!";
        }
        else {
            document.getElementById("RoundText").innerHTML = "Game over! You lose!";
        }
    }

    // decide(playerChoice, compChoice);

    document.getElementById("RoundText").innerHTML = compare;
    document.getElementById("CTier").innerHTML = TIER_TITLE + " " + compTier;
    document.getElementById("PTier").innerHTML = TIER_TITLE + " " + playTier;

    if (playTier == 0 || playTier == 8 || compTier == 0 || compTier == 8) {
        checkWin = true;
    }

}

function newGame() {
    compChoice = 0;
    compare = 0;
    playTier = 4;
    compTier = 4;
}

function decide(choice1, choice2) {

    if (choice1.localeCompare(choice2)) {
        console.log("Here");

            compare = "TIE";
    }

    if (choice1.localeCompare("Rock")) {
        if (choice2.localeCompare("Scissors")) {
            compare = "Player wins this round!";
            playTier++;
            compTier--;
        }

        else {
            compare = "Computer wins this round!";
            compTier++;
            playTier--;
        }
    }
    if (choice1.localeCompare("Scissors")) {
        if (choice2.localeCompare("Paper")) {
            compare = "Player wins this round!";
            playTier++;
            compTier--;
        } else {
            compare = "Computer wins this round!";
            playTier--;
            compTier++;
        }
    }
}