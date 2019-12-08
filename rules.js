import Math

var compChoice= Math.random() % 3;

if (compChoice >= 1) {
    compChoice = "Rock"
}
else if(compChoice >= 2) {
    compChoice = "Paper"
}
else{
    compChoice = "Scissors"
}

var compare = function(choice1, choice2){
    if(choice1 == choice2){
        return "TIE";
    }
    if (choice1 == "Rock"){
        if(choice2 == "Scissors"){
            return "You win!";
        }
        else{
            return "You lose!";
        }
    }
    if (choice1 == "Scissors"){
        if (choice2 == "Paper"){
            return "You win!";
        }
        else {
            return "You lose!";
        }
    }
}
