console.log("Print all numbers between -10 and 19");
var problemOne = -10;
while (problemOne < 20) {
    console.log(problemOne);
    problemOne++;
}

console.log("Print all even numbers between 10 and 40");
var problemTwo = 10;
while (problemTwo < 41) {
    if (problemTwo % 2 == 0) {
        console.log(problemTwo);
    }
    problemTwo++;
}

console.log("Print all odd numbers between 300 and 333");
var problemThree = 300;
while (problemThree < 334) {
    if (problemThree % 2 != 0) {
        console.log(problemThree);
    }
    problemThree++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var problemFour = 5;
while (problemFour < 51) {
    if (problemFour % 5 == 0 && problemFour % 3 === 0) {
        console.log(problemFour);
    }
    problemFour++;
}
