// create secretNum
var secretNum = 4;

// ask for guess
var guess = Number(prompt("Guess a number"));

// check guess
if (secretNum === guess) {
    alert("Awww Yisss!! Good guess!");
} else if (guess < secretNum) {
    alert("your guess too low");
} else {
    alert("Your guess is too damn high")
}
