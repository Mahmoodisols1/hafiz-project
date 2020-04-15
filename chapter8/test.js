//MODEL OBJECT*****************************************
var model = {
    boardSize: 7,
    shipLength: 3,
    shipSunk: 0,
    numShip: 3,

    ships: [
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] }
    ],

    // fire function***************

    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);

            // here's an improvement! Check to see if the ship
            // has already been hit, message the user, and return true.
            if (ship.hits[index] === "hit") {
                view.displayMessage("Oops, you already hit that location!");
                return true;
            } else if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");

                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    

//BATTLESHIP CONTROLLER********************************
var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " +
                    this.guesses + " guesses");
            }
        }
    }
}
// helper function to parse a guess from the user
function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize ||
            column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}

// event handlers

function handleFireButton() {
    var guessInput = document.getElementById('guessInput');
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";

}


function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    e = e || window.event;
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

// init - called when the page has completed loading

window.onload = init;

function init() {
    // Fire! button onclick handler
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    // handle "return" key press
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    // place the ships on the game board
    model.generateShipLocations();
}

view.displayMessage('WELCOME TO THE BATTLESHIP GAME');

// generateShipLocations: 
// generateShip:
// function generateShip() {
//     var direction = Math.floor(Math.random() * 2);
//     var row;
//     var col;
//     if (direction === 1) {
//         row = Math.floor(Math.random() * this.boardSize);
//         col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
//     } else {
//         row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
//         col = Math.floor(Math.random() * this.boardSize);
//     }
//     var newShipLocations = [];
//     for (var i = 0; i < this.shipLength; i++) {
//         if (direction === 1) {
//             newShipLocations.push(row + "" + (col + i));
//         } else {
//             newShipLocations.push((row + i) + "" + col);
//         }
//     }
//     return newShipLocations;
// }

// // collision: 
// function collision(locations) {
//     for (var i = 0; i < this.numShips; i++) {
//         var ship = model.ships[i];
//         for (var j = 0; j < locations.length; j++) {
//             if (ship.locations.indexOf(locations[j]) >= 0) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
