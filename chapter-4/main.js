document.writeln(
    ` <h1><center>Chapter 4</center></h1>
    <h1><center>Assignment #4</center></h1>
    <h1><center>Variable Names: Legal & Illegal</center></h1>`
);

// QUESTION 1;
var a=1, b=2, c=3;

// QUESTION 2:
// Legal Variables
var firstName;
var _user123;
var $price;
var myVariable;
var total_Amount;
/*  Illegal Variable
var First Name;
var My-name;
var 123user;
var @totalAmount;
var var;*/

// QUESTION 3:
document.writeln(`<h3>Rules For naming JS variables</h3>`);
document.writeln(
    "Variable names can only contain, numbers, $ or _. For example: $my_1stVariable <br>"
+ "Variable must begin with a letter, $ or _. For example: $name, _name or name <br>"
+ "Variable names are case sensitive <br>"
+ "Variable names should not be JS keywords");

// ----------------END---------------------------