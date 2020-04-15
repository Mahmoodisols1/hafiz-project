// window.onload = init;
/*
function init() {
    var image0 = document.getElementById('zero');
    image0.onclick = showAnswerzero;

    var image1 = document.getElementById('one');
    image1.onclick = showAnswerone;

    var image2 = document.getElementById('two');
    image2.onclick = showAnswerTwo;

    var image3 = document.getElementById('three');
    image3.onclick = showAnswer3;

    var image4 = document.getElementById('four');
    image4.onclick = showAnswerFour;

    var image5 = document.getElementById('five');
    image5.onclick = showAnswerFive;
}


function showAnswerzero() {
    var image = document.getElementById('zero');
    image.src = 'zero.jpg';
}

function showAnswerone() {
    var image = document.getElementById('one');
    image.src = 'one.jpg';
}

function showAnswerTwo() {
    var image = document.getElementById('two');
    image.src = 'two.jpg';
}

function showAnswer3() {
    var image = document.getElementById('three');
    image.src = 'three.jpg';
}

function showAnswerFour() {
    var image = document.getElementById('four');
    image.src = 'four.jpg';
}

function showAnswerFive() {
    var image = document.getElementById('five');
    image.src = 'five.jpg';
}
*/

// function init() {
//     var images = document.getElementsByTagName("img");
//     for (var i = 0; i < images.length; i++) {
//         images[i].onclick = showAnswer;
//     }
// }

// function showAnswer(eventObj) {
//     var image = eventObj.target;
//     var name = image.id;

//     name = name + ".jpg";

//     image.src = name;
// }

// function init() {
//     var images = document.getElementsByTagName('img');
//     for (var i = 0; i < images.length; i++) {
//         images[i].onclick = showAnswer;
//     }
// }

// function showAnswer(eventObj) {
//     var image = eventObj.target;
//     var name = image.id;
//     name = name + '.jpg';
//     image.src = name;
//     setTimeout(reblur, 2000, image);
// }
// function reblur(image) {
//     var name = image.id;
//     name = name + "blur.jpg";
//     image.src = name;
// }
// function timerHandler() {
//     debugger;
//     alert("Hey what are you doing just sitting there staring at a blank screen?");
// }
// setTimeout(timerHandler, 20000);

// var tick = true;
// debugger;
// function ticker() {
//     if (tick) {
//         console.log("Tick");
//         tick = false;
//     } else {
//         console.log("Tock");
//         tick = true;
//     }
// }
// setInterval(ticker, 1000);


// var fly = ['1','2','3'];
// for (var i = 0; i < fly.length; i++) {
//     console.log("Flying!");
// }

var migrating = true;
var fly = function (num) {
    for (var i = 0; i < num; i++) {
        console.log("Flying!");
    }
};
function quack(num) {
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}
if (migrating) {
    quack(4);
    fly(4);
}