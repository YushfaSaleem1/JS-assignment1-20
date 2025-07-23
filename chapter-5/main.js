document.writeln(
    `<h1><center>Chapter 05</center></h1>
     <h2><center>Assignment #5</center></h2>
     <h2><center>Math Expressions</center></h2>`
)

// QUESTION 1:
// Sum of 2 digits..
document.writeln("<h3>QUESTION 1:</h3>");
number = +prompt("Enter a digit");
number2 = +prompt("Enter one more digit to add");
answer = (number + number2);
document.writeln("The sum of " + number + " and " + number2 + " is " + answer + ".<br>");

// Question 2:
// subtraction multiplication division and modulus...
document.writeln("<h3>QUESTION 2:</h3>");
document.writeln("The subtraction of " + number + " and " + number2 + " is " + (number - number2) + ".<br>");
document.writeln("The division of " + number + " and " + number2 + " is " + (number / number2) + ".<br>");
document.writeln("The multiplication of " + number + " and " + number2 + " is " + (number * number2) + ".<br>");
document.writeln("The modulus of " + number + " and " + number2 + " is " + (number % number2) + ".<br><br>");

// Question 3:
document.writeln("<h3>QUESTION 3:</h3>");
var digit;  //declare variable
document.writeln("Value after variable declaration is: " + digit + "<br>");
digit = 6; //initialize number
document.writeln("Initial value: " + digit + "<br>");
digit++;  //increment
document.writeln("Value after increment is:" + digit + "<br>");
digit = digit + 7;  //add a number
document.writeln("Value after addition is: " + digit + "<br>");
digit--;  //decrement
document.writeln("Value after decrement is: " + digit + "<br>");
var remainder = digit % 3;
document.writeln("Output: The reminder is: " + remainder + "<br><br>");

// Question 4:
document.writeln("<h3>QUESTION 4:</h3>");
var cost = "600";
var ticket = "5";
var total = cost * ticket;
document.writeln("Total cost to buy " + ticket + " tickets to a movie is " + total + "PKR <br><br>");

// Question 5:
document.writeln("<h3>QUESTION 5:</h3>");
var table = +prompt("Write any number to print table");
document.writeln("Table of " + table + "<br>");
for (var i = 1; i <= 10; i++) {
    document.writeln(table + " x " + i + " = " + (table * i) + "<br>");
}

// Question 6:
document.writeln("<h3>QUESTION 6:</h3>");
var celsius = 25;
document.writeln("<br>" + celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F" + "<br>");
var fahrenheit = 70;
document.writeln(fahrenheit + "°F is " + ((fahrenheit - 32) * 5 / 9) + "°C <br><br>");

// Question 7:
document.writeln("<h3>QUESTION 7:</h3>");
var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipping = 100;
// total cost of order
document.writeln("<h4> Shopping Cart </h4>")
document.writeln("Price of item1 = " + item1 + "<br>");
document.writeln("Quantity of item1 = " + quantity1 + "<br>");
document.writeln("Price of item2 = " + item2 + "<br>");
document.writeln("Quantity of item2 = " + quantity2 + "<br>");
document.writeln("Shipping Charges = " + shipping + "<br>");

document.writeln("Total cost of order = " + ((item1 * quantity1) + (item2 * quantity2) + shipping) + "<br><br>");

// Question 8:
document.writeln("<h3>QUESTION 8:</h3>");
var marks = 804;
var totalMarks = 100;
var percentage = ((marks / totalMarks) * 100);
document.writeln("<h4> Marks Sheet </h4>")
document.writeln("Total marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + marks + "<br>");
document.writeln("Percentage: " + percentage + "<br><br>");

// Question 9:
document.writeln("<h3>QUESTION 9:</h3>");
document.writeln("<b> Currency in PKR </b><br>");
var Dollar1 = 104.80;
var riyal1 = 28;
var totalCurrency = ((Dollar1 * 10) + (riyal1 * 25));
document.writeln("Total currency in PKR: " + totalCurrency + "<br>");

// Question 10
document.writeln("<h3>QUESTION 10:</h3>");
var integer = 5;
document.writeln("The arithmetic clculation is " + ((integer + 5) * 10) / 2 + "<br>");

// Question 11
document.writeln("<h3>QUESTION 11:</h3>");
document.writeln("<b>Age Calculator:</b>");
var currentYear = 2025;
var birthYear = 2004;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.writeln("They are either " + age2 + " or " + age1 + " years old.");
