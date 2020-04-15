/* eslint-disable one-var */

var score, roundScore, activePlayer;
score = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

// document.querySelector('#current-' + activePlayer).textContent = dice;
function btn() {

    //1. Random number
    var dice = Math.floor(Math.random() * 6 + 1);

    //2. Random number
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //.3 update the round score if the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score 
        roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player trun
        // if (activePlayer == 0) {
        //     activePlayer = 1;


        // } else {
        //     activePlayer = 0;

        // }

        activePlayer = activePlayer == 0 ? 1 : 0;
        roundScore = 0;
        document.getElementById('current-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';

        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
    }
    // document.querySelector('.player-0-panal').classList.remove('active');
}

document.querySelector('.btn-roll').addEventListener('click', btn);
