//import giveLabel from './AdvancedModel.js'

var compChoice;
var compare = "TEST TEXT";
var playTier = 4;
var compTier = 4;
var TIER_TITLE = "Tier";
var checkWin = false;
var playerChoice = "Rock";
var moveupCount = 1;
var moveDownCount = 1;


function onLoad() {
    document.getElementById("CTier").innerHTML = TIER_TITLE + " " + compTier;
    document.getElementById("PTier").innerHTML = TIER_TITLE + " " + playTier;
    document.getElementById("RoundText").innerHTML = "Text is here";
    return 0;
}

function startRound() {
    // compChoiceN = Math.random() % 3;
    //playerChoice = giveLabel();
    //console.log(playerChoice);

    let choiceArray = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random()*choiceArray.length);
    compChoice = choiceArray[randomNum];
    console.log(compChoice);

    if (compChoice == "Rock") {
        document.getElementById("compDisplay").src = "rock.png";
    }
    else if (compChoice == "Paper") {
        document.getElementById("compDisplay").src = "paper.png";
    }
    else {
        document.getElementById("compDisplay").src = "scissors.png";
    }

    decide(playerChoice, compChoice);

    if (checkWin == true) {
        if (playTier == 8) {
            document.getElementById("RoundText").innerHTML = "Game over! You lose!";
            return;
        }
        else if (playTier == 0) {
            document.getElementById("RoundText").innerHTML = "Game over! You win!";
            return;
        }
        else if (compTier == 0) {
            document.getElementById("RoundText").innerHTML = "Game over! You lose!";
            return;
        }
        else {
            document.getElementById("RoundText").innerHTML = "Game over! You win!";
            return;6
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

    if (choice1 == choice2) {

            compare = "TIE";
            return;
    }

    if (choice1.localeCompare("Rock")) {
        if (choice2.localeCompare("Scissors")) {
            compare = "Player wins this round!";
            playTier++;
            compTier--;
            return;
        }

        else {
            compare = "Computer wins this round!";
            compTier++;
            playTier--;
            return;
        }
    }
    if (choice1.localeCompare("Scissors")) {
        if (choice2.localeCompare("Paper")) {
            compare = "Player wins this round!";
            playTier++;
            compTier--;
            return;
        } else {
            compare = "Computer wins this round!";
            playTier--;
            compTier++;
            return;
        }
    }
}

function moveUp() {
    if (moveupCount == 1) {
        playTier++;
    }
    moveupCount--;
}

function moveDown() {
    if (moveDownCount == 1) {
        compTier--;
    }
    moveDownCount--;
}