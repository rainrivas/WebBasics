var firstNameDefault = "seriously no first name...";
var lastNameDefault = "fine don't give a last name...";
var ageDefault = "c'mon princess, how old are you...";

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var age = prompt("What is your age");

if (firstName == null || firstName == "" || firstName == undefined) {
    firstName = firstNameDefault;
}
if (lastName == null || lastName == "" || lastName == undefined) {
    lastName = lastNameDefault;
}
if (age == null || age == "" || age == undefined) {
    age = ageDefault;
}

console.log('Your full name is ' + firstName + " " + lastName);
console.log('You are ' + age + ' years old');
