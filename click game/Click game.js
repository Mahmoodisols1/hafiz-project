// // // // function clock() {
// // // //     var fireButton = document.getElementById('fireButton');
// // // //     fireButton.onclick = handler;
// // // // }
// // // // clock();
// // // // function handler() {
// // // //     document.write('SELECT GENGER')

// // // // }




// // // // var fly = function (num) {

// // // //     for (var i = 0; i < num; i++) {
// // // //         console.log("Flying!");
// // // //     }
// // // // }

// // // // var superFly = fly;
// // // // superFly(29)

// // // // page number 440 (480 / 704) sharpen your pencil;*******

// // // // var winner = function () {
// // // //     alert('WINNER!')
// // // // };


// // // // var loser = function () {
// // // //     alert('loser')
// // // // };



// // // // var a = winner;
// // // // var b = loser;
// // // // var c = loser;
// // // // a();
// // // // b();
// // // // c = a;
// // // // a = b;
// // // // b = c;
// // // // c = a;
// // // // a = c;
// // // // a = b;
// // // // b = c;
// // // // a();

// // // var passengers = [
// // //     { name: "Jane Doloop", paid: true },
// // //     { name: "Dr. Evel", paid: true },
// // //     { name: "Sue Property", paid: false },
// // //     { name: "John Funcall", paid: true }
// // // ];
// // // // function checkPaid(passengers) {
// // // //     for (var i = 0; i < passengers.length; i++) {
// // // //         if (!passengers[i].paid) {
// // // //             return false;
// // // //         }
// // // //         return true;
// // // //     }
// // // // }

// // // // function checkNoFly(passengers) {
// // // //     for (var i = 0; i < passengers.length; i++) {
// // // //         if (onNoFlyList(passengers[i].name)) {
// // // //             return false;
// // // //         }
// // // //     }
// // // //     return true;
// // // // }
// // // // console.log(checkNoFly(passengers));

// // // function printPassengers() {
// // //     for (var i = 0; i < passengers.length; i++) {
// // //         console.log(passengers[i].name);
// // //         return false;
// // //     }
// // //     return true;
// // // }
// // // printPassengers();





// // // function sayIt(translator) {
// // //     var pharse = translator('Hello')
// // //     // console.log(pharse);
// // //     // debugger;
// // //     alert(pharse);
// // // }


// // // function hawaiianTdranslator(word) {
// // //     if (word === 'Hello') return 'Aloha';
// // //     if (word === "Goodbye") return "Aloha";
// // // }
// // // hawaiianTdranslator();


// // function sayIt(translator) {
// //     var phrase = translator("Hello");
// //     alert(phrase);
// // }
// // function hawaiianTranslator(word) {
// //     if (word === "Hello") return "Aloha";
// //     if (word === "Goodbye") return "Aloha";
// // }
// // sayIt(hawaiianTranslator);

// var table = prompt('press any number');
// for (var i = 1; i<= 5000 ; i++) {
//     console.log(table + " * " + i + ' = ' + table*i  );
// }
function student() {
    this.name = 'Mahmood';
    this.age = 34;
}

student.prototype = {
    address: 'pishawar',
    // getName: function () {
    //     return this.name;
    // }
}

var stu = new student();
var abc = stu.address;
console.log(abc);