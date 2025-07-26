document.writeln(
    `<h1><center>Chapter 12-13</center></h1>
     <h2><center>Assignment #8</center></h2>
     <h2><center>If ... Else & Esle If Statement, Testing Set Of Conditions</center></h2>`
)

// QUESTION 1:
// CHECKING NUMBER, UPPERCASE OR LOWER CASE
document.writeln("<h3>QUESTION 1:</h3>");
document.writeln("<b>Checking wether it is number, uppercase or lowercase: </b><br>");

var input = prompt("Enter any single character");

if (input >= '0' && input <= '9'){
    alert("This is a number");

}else if (input >= 'A' && input <= 'Z') {
    alert("It is an uppercase letter");

}else if (input >= 'a' && input <= 'z') {
    alert("It is an lowercase letter");
    
}else{
    alert("It is something else");
}


// QUESTION 2:
// DISPLAY THE LARGER INTEGER
document.writeln("<h3>QUESTION 2:</h3>");
document.writeln("<b>Displays the larger integer: </b><br>");

var num1 = +prompt("Enter the first integer");
var num2 = +prompt("Enter the second integer");

if (num1 > num2){
    alert("The larger number is: " + num1);
    document.writeln("The larger number is: " + num1);
}else if (num1 < num2){
    alert("The larger number is: " + num2);
    document.writeln("The larger number is: " + num2);
}else {
    alert("Both numbers are equal");
    document.writeln("Both numbers are equal");
}

// QUESTION 3:
// STATE WETHER THE NUMBER IS POSITIVE, NEGATIVE, OR ZERO.
document.writeln("<h3>QUESTION 3:</h3>");
document.writeln("<b>Checking the number is positive, negative or zero: </b><br>");

var number = +prompt("Enter a number");

if (number > 0) {
    alert("This is a positive number.");
    document.writeln("This is a positive number.");
}else if (number < 0) {
    alert("This is a negative number.");
    document.writeln("This is a negative number.");
}else{
    alert("The number is zero.");
    document.writeln("The number is zero.");
}

// QUESTION 4:
// CHECKING VOWEL
document.writeln("<h3>QUESTION 4:</h3>");
document.writeln("<b>Checking vowel as character: </b><br>");

var char = prompt("Enter a single character");

if (char.length === 1) {

    if(char === "a" || char === "e" || char ==="i" || char === "0" || char === "u" ||
        char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            alert("True");
            document.writeln("True");
        }else {
    alert("False");
    document.writeln("False");
}

}else{
    alert("Please enter exactly one character");
    document.writeln("Please enter exactly one character");
}


// QUESTION 5:
// PASSWORD
document.writeln("<h3>QUESTION 5:</h3>");
document.writeln("<b>Password: </b><br>");

var userIput = prompt("Enter your password.")
var password = "Yushfa";

if (userIput === password) {
    alert("Correct! The password you enter matches the original password.");
    document.writeln("Correct! The password you enter matches the original password.");
}else if(userIput === "" || userIput === null) {
    alert("Please enter your password");
     document.writeln("Please enter your password");

}else {
    alert("Incorrect password");
    document.writeln("Incorrect password");
}


// QUESTION 6:
// Fixing the code
document.writeln("<h3>QUESTION 6:</h3>");
document.writeln("<b>FIXING THE CODE: </b><br>");

var hour = +prompt("Enter hour (in 24 hour format):");
var greeting;

if (hour < 18) {
    greeting = "Good day";
}else{
    greeting = "Good evening";
}

alert(greeting);
document.writeln(greeting);

// QUESTION 7:
// 24 HOUR FORMAT
document.writeln("<h3>QUESTION 7:</h3>");
document.writeln("<b>24 hour format: </b><br>");

var time = +prompt("Enter time in 24-hour (e.g 1900)");

if (time >= 0 && time < 1200) {
    alert("Good morning!");
    document.writeln("Good morning!");
}else if(time >= 1200 && time < 1700) {
    alert("Good afternoon!");
    document.writeln("Good Afternoon!");
}else if(time >= 1700 && time < 2100) {
    alert("Good evening!");
    document.writeln("Good evening!");
}else if(time >= 2100 && time <= 2359) {
    alert("Good night!");
    document.writeln("Good night!");
}else{
    alert("Invalid time!");
    document.writeln("Invalid time!");
}

//----------------------------END-----------------------