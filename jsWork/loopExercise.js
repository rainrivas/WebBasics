/******************************
 *****     WHILE LOOP      *****
 ******************************/
// console.log("Print all numbers between -10 and 19");
// var problemOne = -10;
// while (problemOne < 20) {
//     console.log(problemOne);
//     problemOne++;
// }

// console.log("Print all even numbers between 10 and 40");
// var problemTwo = 10;
// while (problemTwo < 41) {
//     if (problemTwo % 2 == 0) {
//         console.log(problemTwo);
//     }
//     problemTwo++; // adding 2 to the counter can only run if you start on an even. See below
// }

// console.log("Print all odd numbers between 300 and 333");
// var problemThree = 300;
// while (problemThree < 334) {
//     if (problemThree % 2 != 0) {
//         console.log(problemThree);
//     }
//     problemThree++;
// }

// console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
// var problemFour = 5;
// while (problemFour < 51) {
//     if (problemFour % 5 == 0 && problemFour % 3 === 0) {
//         console.log(problemFour);
//     }
//     problemFour++;
// }

/******************************
 ***** OPTIMIZED PROBLEM 2 *****
 ******************************/
// var optimized = 10;
// while(optimized <41){
//  console.log(optimized);
//  optimized+=2;
// }


/******************************
 *****      FOR LOOP       *****
 ******************************/
console.log("Print all numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
    console.log(i);
}

console.log("Print all even numbers between 10 and 40");
for (var i = 10; i <= 40; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("Print all odd numbers between 300 and 333");
for (var i = 300; i < 334; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for (var i = 5; i < 51; i++) {
    if (i % 5 == 0 && i % 3 === 0) {
        console.log(i);
    }
}
