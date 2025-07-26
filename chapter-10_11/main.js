document.writeln(
    `<h1><center>Chapter 10-11</center></h1>
     <h2><center>Assignment #7</center></h2>
     <h2><center>User Input & Conditional Statement</center></h2>`
)

// QUESTION 1:
// PROGRAM TO TAKE A CITY
document.writeln("<h3>QUESTION 1:</h3>");
document.writeln("<b>Program to take a city: </b><br>");

var city = prompt("Enter a city Hint: (karachi)");
if (city === "karachi") {
    alert("Welcome to city of light");
    document.writeln("Welcome to city of light");
};

// QUESTION 2:
// PROGRAM TO TAKE A Gender
document.writeln("<h3>QUESTION 2:</h3>");
document.writeln("<b>Program to take a Gender: </b><br>");

var gender = prompt("Enter your Gender Hint: (male/female)");
if (gender === "male") {
    alert("Good Morning Sir.");
    document.writeln("Good Morning Sir.");
}else if (gender === "female") {
    alert("Good Morning Mam.");
    document.writeln("Good Morning Mam.");
};

// QUESTION 3:
// PROGRAM TO TAKE COLOR OF ROAD TRAFFIC SIGNALS
document.writeln("<h3>QUESTION 3:</h3>");
document.writeln("<b>Program to take color of road traffic signal: </b><br>");

var traffic = prompt("Write a color of road traffic signal");
if (traffic === "red"){
    alert("Must Stop")
    document.writeln("Must Stop");
} else if(traffic === "yellow"){
    alert("Ready to Move")
    document.writeln("Ready to Move");
}else if(traffic === "green"){
    alert("Move now")
    document.writeln("Move now");
}else {
    alert("Enter a valid color");
};

// QUESTION 4:
// PROGRAM TO TAKE REMAINING FUEL IN CAR 
document.writeln("<h3>QUESTION 4:</h3>");
document.writeln("<b>Program to take remaining fuel in car: </b><br>");

var fuel = prompt("Enter a remaining fuel in car(in litres)");
if (fuel < 0.25){
    alert("Please refill the fuel in your car");
    document.writeln("Please refill the fuel in your car");
}else{
    alert("No need to refill");
}


// QUESTION 5:
// CHECKING THE SCRIPT
document.writeln("<h3>QUESTION 5:</h3>");
document.writeln("<b>Checking the Script: </b><br>");

//-------------------------a
// var a - 4;  ---------------we cannot use assignment operator that's why it is false;
// if(++a === 5){
//     alert("Given condition for a variable is true");
// };

//-------------------------b
// var b-82;  ----------------this is also false
// if(b| |---83){
//     alert("given condition for variable b is true");
// }

//-------------------------c
var c=12;
// if(c || --- 13){
//     alert("condition 1 is true");
// } ------>this is not true
if (c===13) {
    alert("condition 2 is true");
    document.writeln("condition 2 is true");
}
// if (| |c < 14) {
//     alert("condition 3 is true");
// } ------>this is not true
if (c===14) {
    alert("condition 4 is true");
    document.writeln("condition 4 is true");
}

//-------------------------d
// var materialCost - 2000;
// var laborCost - 2000;
// var totalCost - materialCost + laborCost;
// if(totalCost === laborCost + materialCost){
//     alert("The cast equals");
// } ------>this is not true bcz we dont use assignment operator

//-------------------------e
if (true){
    alert("True");
    document.writeln("True");
}
// if(false){
//     alert("False");
// } ------>this cannot run

//-------------------------f
if ("car" < "cat"){
    alert("car is smallest than cat");
    document.writeln("car is smallest than cat");
}

// QUESTION 6:
// MRKS SHEET
document.writeln("<h3>QUESTION 6:</h3>");
document.writeln("<b>Marks Sheet: </b><br>");

var sub1 = +prompt("Enter marks obtained in Subject 1:");
var sub2 = +prompt("Enter marks obtained in Subject 2:");
var sub3 = +prompt("Enter marks obtained in Subject 3:");

var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks/totalMarks)*100;

if ( percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + obtainedMarks + "<br>");
document.writeln("Percentage: " + percentage + "%<br>");
document.writeln("Grade: " + grade + "<br>");
document.writeln("Remarks: " + remarks + "<br>");


// QUESTION 7:
// GUESS GAME
document.writeln("<h3>QUESTION 7:</h3>");
document.writeln("<b>Guess Game: </b><br>");

var userGuess = +prompt("Guess a number (ranging from 1 to 10)");
var secretNumber = 7;

if (userGuess === secretNumber){
    alert("Bingo! Correct answer.");
    document.writeln("Bingo! Correct answer.");
} else if(userGuess === secretNumber + 1){
    alert("Close enough to the Correct answer.");
    document.writeln("Close enough to the Correct answer.");
} else{
    alert("Try again! You loose");
    document.writeln("Try again! You loose");
}


// QUESTION 8:
// DIVISIBILITY CHECK:
document.writeln("<h3>QUESTION 8:</h3>");
document.writeln("<b>Divisibility Check: </b><br>");

var divisible = +prompt("Enter a number to check if it's divisible by 3");

if (divisible % 3 === 0) {
    alert("The number is divisible by 3");
    document.writeln("The number " + divisible + "is divisible by 3. <br>");
}else{
    alert("The number is not divisible by 3");
    document.writeln("The number " + divisible + "is not divisible by 3. <br>");

}

// QUESTION 9:
// CHECKING EVEN OR ODD NUMBER :
document.writeln("<h3>QUESTION 9:</h3>");
document.writeln("<b>Checking Even Or Odd Number: </b><br>");

var integer = +prompt("Enter a number to identify whether it's Even or Odd");

if (integer % 2 === 0) {
    alert("Its is an Even number");
} else {
    alert("It is an Odd number")
}

// QUESTION 10:
// CHECKING TEMPERATURE:
document.writeln("<h3>QUESTION 10:</h3>");
document.writeln("<b>Checking Temperature: </b><br>");

var temperature = +prompt("What is today's temperature");

if (temperature > 40) {
    alert("It is too hot outside");
    document.writeln("It is too hot outside");

} else if (temperature > 30){
    alert("The Weather today is normal");
    document.writeln("The Weather today is normal");

} else if (temperature > 20){
    alert("Today's Weather is cool");
    document.writeln("Today's Weather is cool");

}  else if (temperature > 10){
    alert("OMG! Today's weather is so Cold");
    document.writeln("OMG! Today's weather is so Cold");

}else {
    alert("Please enter a number greater than 10");
    document.writeln("Please enter a number greater than 10")
}

// QUESTION 11:
// CREATING BASIC CALCULATOR:
document.writeln("<h3>QUESTION 11:</h3>");
document.writeln("<b>Creating a calculator: </b><br>");

var firstNumber = +prompt("Enter a first digit");
var secondNumber = +prompt("Enter a second digit");
var operation = prompt("what to do (Hint: +, -, *, /, %)");  // + - / % * these are strings not a number so we donot use +prompt in it 

var add = firstNumber + secondNumber;
var subtract = firstNumber - secondNumber;
var multiply = firstNumber * secondNumber;
var divide = firstNumber / secondNumber;
var modulus = firstNumber % secondNumber;

if (operation === "+") {
    alert(add);
     document.writeln(add);
}else if (operation === "-") {
    alert(subtract);
     document.writeln(subtract);
}else if (operation === "*") {
    alert(multiply);
     document.writeln(multiply);
}else if (operation === "/") {
    alert(divide);
     document.writeln(divide);
}else if (operation === "%") {
    alert(modulus);
     document.writeln(modulus);
}else{
    alert("Invalid operation!");
    document.writeln("Invalid operation!");
}

//--------------------END-----------------