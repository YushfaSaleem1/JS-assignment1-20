document.writeln(
    `<h1><center>Chapter 06</center></h1>
     <h2><center>Assignment #6</center></h2>
     <h2><center>Math Expressions</center></h2>`
)

// QUESTION 1:
// RESULT..
document.writeln("<h3>QUESTION 1:</h3>");
document.writeln("<b>Result:</b><br>");

var a = +prompt("Write a number here: ");//10

document.writeln("The value of a is: " + a + "<br>");//10
document.writeln("..............................." + "<br><br>");

a = ++a ;
document.writeln("The value of ++a is: " + a + "<br>");//11
document.writeln("Now the value of a is: " + a + "<br><br>");//11

a = a++ ;
document.writeln("The value of a++ is: " + a + "<br>");//11
a = a + 1 ;
document.writeln("Now the value of a is: " + a + "<br><br>");//12

a = --a ;
document.writeln("The value of --a is: " + a + "<br>");//11
document.writeln("Now the value of a is: " + a + "<br><br>");//11

a = a-- ; 
document.writeln("The value of a-- is: " + a + "<br>");//11
a = a - 1 ;
document.writeln("Now the value of a is: " + a + "<br><br>");//10

// QUESTION 2:
// EXECUTION

document.writeln("<h3>QUESTION 2:</h3>");
document.writeln("<b>Execution of the script:</b><br>");

var a = 2;
var b = 1;
             //1   //0    //1    //1
var result = --a - --b + ++b + b--;
            // 1  -  0  +   1  +  1  = 3

// --a = 1 pre decrement
// --b = 0 
// ++b = 1 ( b ki value ab 0 hogyi to pre increment pr ye hoga)
// b-- = o post decrement

document.writeln("Value of a = " + a + "<br>") ;
document.writeln("Value of b = " + b + "<br>") ;
document.writeln("Result is: " + result + "<br>");


// QUESTION 3:
// TAKE INPUT OF NAME AND GREET

document.writeln("<h3>QUESTION 3:</h3>");
document.writeln("<b>TAKE INPUT OF NAME AND GREET:</b><br>");

var name = prompt("Write your name here.");
alert("Hello " + name + "!" );
document.writeln("Hello " + name + "! <br>" );

// QUESTION 4:
// MULTIPLICATION OF NUMBER

document.writeln("<h3>QUESTION 4:</h3>");
document.writeln("<b>Multiplication Table:</b><br>");

var table = prompt("Enter a number for it's table"); 
//+prompt converts any input to a number, and if the input is blank, it becomes 0, not null or "".
//If the user enters nothing, +prompt"" becomes 0, which is falsey but not null.
//So we dont put + , and if we give space between " " it become string so for nothing input we write ""

if (table === "" || table === null) {
        table = 5;
        document.writeln("You did not enter a number. <br> Showing a table of 5 by default. <br>");
    }

for (var i = 1; i <= 10; i++) {
    document.writeln(table + "x " + i + "= " + (table * i) + "<br>");
}


// QUESTION 5:
// Subject Total Marks Obtained Marks Percentage

document.writeln("<h3>QUESTION 4:</h3>");
document.writeln("<b>Calculating Total marks&Percentage.</b><br>");

var subject1 = prompt("Enter first Subject Name");
var marks1 = +prompt("Enter obtained marks of first Subject");
var subject2 = prompt("Enter second Subject Name");
var marks2 = +prompt("Enter obtained marks of Second Subject");
var subject3 = prompt("Enter third Subject Name");
var marks3 = +prompt("Enter obtained marks of Third Subject");
var totalMarks = 100;

var total = (totalMarks*3);
var marksTotal = (marks1+marks2+marks3);

document.writeln("<table border='1' cellpadding='10'>");
document.writeln("<tr><th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th></tr>");
document.writeln("<tr><td>" + (subject1) + "</td><td>" + (totalMarks) + "</td><td>" + (marks1) + "</td><td>" + ((marks1/totalMarks)*100) + "%</td></tr>");
document.writeln("<tr><td>" + (subject2) + "</td><td>" + (totalMarks) + "</td><td>" + (marks2) + "</td><td>" + ((marks2/totalMarks)*100) + "%</td></tr>");
document.writeln("<tr><td>" + (subject3) + "</td><td>" + (totalMarks) + "</td><td>" + (marks3) + "</td><td>" + ((marks3/totalMarks)*100) + "%</td></tr>");
document.writeln("<tr><td>" + "Total" + "</td><td>" + (total) + "</td><td>" + (marksTotal) + "</td><td>" + ((marksTotal/total)*100) + "%</td></tr>");

// ---------------------------END----------------------------------