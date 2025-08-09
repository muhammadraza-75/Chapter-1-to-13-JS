var char = prompt("Enter a single character:").toLowerCase();
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  alert("It is a vowel.");
} else {
  alert("It is a consonant.");
}

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
if (num1 > num2) {
  alert("First number is greater: " + num1);
} else if (num2 > num1) {
  alert("Second number is greater: " + num2);
} else {
  alert("Both numbers are equal.");
}


var num = +prompt("Enter a number:");
if (num > 0) {
  alert("Number is positive.");
} else if (num < 0) {
  alert("Number is negative.");
} else {
  alert("Number is zero.");
}


var correctPassword = "mypassword123";
var userPassword = prompt("Enter your password:");
if (userPassword === "") {
  alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches.");
} else {
  alert("Incorrect password.");
}


var greeting;
var hour = 18;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
alert(greeting);



var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= 0 && time < 1200) {
  alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evening");
} else if (time >= 2100 && time <= 2359) {
  alert("Good Night");
} else {
  alert("Invalid time format");
}
