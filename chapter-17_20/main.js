document.writeln(
    `<h1><center>Chapter 17-20</center></h1>
     <h2><center>Assignment #10</center></h2>
     <h2><center>Arrays and Loop</center></h2>`
)

// QUESTION 1:

document.writeln("<h3>QUESTION 1:</h3>");
//MULTIDIMENTIONAL ARRAYS (Arrays of Array)
var numbers = [
    [0, 1, 2],
    [6, 8, 10],
    [3, 5, 9]
];
document.writeln(numbers[1][2] + "<br>");//10---------output
document.writeln(numbers[0][0] + "<br>");//0---------output

// QUESTION 2:

document.writeln("<h3>QUESTION 2:</h3>");
//MULTIDIMENTIONAL ARRAYS (representing the following matrix)

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
//to display matrix in proper way of format
for (var i = 0; i < matrix.length; i++) {
    document.writeln(matrix[i].join(" ") + "<br>");
};

// QUESTION 3:

document.writeln("<h3>QUESTION 3:</h3>");
//Print numeric coding from 1 to 10

for (var i=1; i <= 10; i++){
    document.writeln(i + "<br>")
}

// QUESTION 4:

document.writeln("<h3>QUESTION 4:</h3>");
//Print a table 
document.writeln("<h4>Multiplication Table</h4>");

var number = +prompt("Enter a number to show it's multiplication table");
var length = +prompt("Enter length multiplication table");

for (var i = 1; i <= length; i++){
    document.writeln(number + "x " + i + "= " + (number * i) + "<br>");
};

document.writeln("<br> Total Length: " + length);

// QUESTION 5:

document.writeln("<h3>QUESTION 5:</h3>");
//Print item from following

var items = ["apple", "banana", "mango", "orange", "strawberry"];

//print each fruit
for (var i = 0; i <= items.length-1; i++) {
    document.writeln(items[i] + "<br>");
};

document.writeln("<br>");

//print item with index
for (var i = 0; i < items.length; i++) {
    document.writeln("Element of index " + i + " is " + items[i] + "<br>");
};

// QUESTION 6:

document.writeln("<h3>QUESTION 6:</h3>");
//Print 
// counting, reverse counting, even numbers, odd number, series(2k, 4k, 6k)

//COUNTING 1-15
document.writeln("<b>Counting: </b><br>");
for(var i=1; i <=15; i++){
    document.writeln(i + ", ");
};

document.writeln("<br><br>");

//REVERSE COUNTING 10-1
document.writeln("<b>Reverse Counting: </b><br>");
for(var i = 10; i >= 1; i--){
    document.writeln(i + ", ");
};

document.writeln("<br><br>");


//EVEN NUMBERS 2-20
document.writeln("<b>Even Numbers: </b><br>");
for(var i = 0; i <= 20; i += 2){
    document.writeln(i + ", ");
};

document.writeln("<br><br>");


//ODD NUMBERS 1-19
document.writeln("<b>Odd Numbers: </b><br>");
for(var i = 1; i <= 19; i += 2){
    document.writeln(i + ", ");
};

document.writeln("<br><br>");


//SERIES 2k-4k
document.writeln("<b>Series: </b><br>");
for(var i = 2; i <= 20; i += 2){
    document.writeln(i + "k" + ", ");
};

document.writeln("<br><br>");

// QUESTION 7:

document.writeln("<h3>QUESTION 7:</h3>");
//search item by user input

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter a bakery item to search");
var item2 = userInput;

var index = items.indexOf(item2);//indexof=returns the index if found otherwise -1

if (index !== -1) {// !== -1 means the item is found 
    alert("Yes " + userInput + " is available at index " + index + " in our bakery.");
    document.writeln("Yes " + userInput + " is available at index " + index + " in our bakery.");
} else{
    alert("We are sorry " + userInput + " is not available in our bakery.");
    document.writeln("We are sorry. " + userInput + " is not available in our bakery.");
}

// QUESTION 8:

document.writeln("<h3>QUESTION 8:</h3>");
//program to find largest number 

var A = [24, 54, 67, 90, 89];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if ( A[i] > largest) {
        largest = A[i];
    }
}

document.writeln("Array numbers: " + A + "<br>");
document.writeln("The largest number is: " + largest);

// QUESTION 9:

document.writeln("<h3>QUESTION 9:</h3>");
//program to find smallest number 

var A = [24, 54, 67, 90, 89];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if ( A[i] < smallest) {
        smallest = A[i];
    }
}

document.writeln("Array numbers: " + A + "<br>");
document.writeln("The smallest number is: " + smallest);


// QUESTION 10:

document.writeln("<h3>QUESTION 10:</h3>");
//Multiples of 5 till 100

document.writeln("<h4>Multiples of 5:</h4>");
for (var i = 5; i <= 100; i += 5) {
    document.writeln(i);
};

//----------------------END---------------