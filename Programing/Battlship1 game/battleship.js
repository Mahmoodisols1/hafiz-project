var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hit = 0;
var guesses = 0;
var isSunk = false;
debugger;
while (isSunk == false) {
    guess = prompt("ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Pleas enter a valide call number!")
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alret("You sank my battleship!");
            }
        } else {
            alert("MISS")
        }
    }
}
