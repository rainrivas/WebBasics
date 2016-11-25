// create secretNum
var secretNum = 4;

// ask for guess
var guess = Number(prompt("Guess a number"));

while (guess != secretNum) {
    if (guess < secretNum) {
        alert("your guess too low");
        guess = Number(prompt("Guess Again Fool!"));

    } else {
        alert("Your guess is too damn high")
        guess = Number(prompt("Guess Again Fool!"));
    }
}
// good guess
alert("Awww Yisss!! Good guess!");
