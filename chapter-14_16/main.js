document.writeln(
    `<h1><center>Chapter 14-16</center></h1>
     <h2><center>Assignment #9</center></h2>
     <h2><center>Arrays</center></h2>`
)

// QUESTION 1:

document.writeln("<h3>QUESTION 1:</h3>");

// EMPTY ARRAY USING JS LITERAL NOTATION
var studentNames = [];

// DECLARE AN EMPTY ARRAY USING JS OBJECT NOTATION
var studentNames = new Array();

// DECLARE AND INITIALIZE A STRING ARRAY 
var fruits = ["Aplle", "Mango", "Banana"];

//DECLARE AND INITIALIZE A NUMBER ARRAY
var bumbers = [10, 20, 30, 40];

//DECLARE AND INITIALIZE A BOOLEAN ARRAY
var flags = [true, false, true, false];

//DECLARE AND INITIALIZE A MIXED ARRAY
var mixed = ["Yushfa", 32, true, "slaeem"];

//STORE AVAILABLE EDUCATION QUALIFICATION EDUCATION IN PAKISTAN
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.writeln("<h4>Qualifications:</h4>");

for (var i = 0; i < education.length; i++) {
    document.writeln((i + 1) + ") " + education[i] + "<br>");
}

// QUESTION 2:

document.writeln("<h3>QUESTION 2:</h3>");

//STORE 3 STUDENT NAMES IN ARRAY
var studentNames = ["Sana", "Fiza", "Ayesha"];
// STORE SCORE OF THESE 3 STUDENTS
var studentScore = [30, 90, 70];
//ASSUME TOTAL MARKS ARE 50
var totalMarks = 500;
 
for(i = 0; i < studentNames.length; i++){
    var percentage = (studentScore[i]/totalMarks)*100;
    document.writeln("Score of " + studentNames[i] + " is " + studentScore[i] + ". " + "Percentage " + percentage + "%<br>")
};

//Question 3:

document.writeln("<h3>QUESTION 3:</h3>");

//INITIALIZE COLORS NAME IN ARRAY
var colors = ["Blue", "Green", "Red", "White", "Yellow"];
document.writeln(colors + "<br><br>");

//ADD COLORS TO THE BEGINNING OF THE ARRAY
var addStart = prompt("Enter a color to add at the beginning");
colors.unshift(addStart);//unshift always add in starting 
document.writeln("<b>After adding at the beginning: <b>" + colors + "<br><br>");

//ADD COLOR TO THE ENDING OF AN ARRAY
var addEnd = prompt("Enter a color to add at the ending");
colors.push(addEnd);//push always addin end
document.writeln("After adding at the end: " + colors + "<br><br>");

//ADD 2 MORE COLORS TO BEGINNING
var firstColor = prompt("Enter another color to add at beginnning:");
var secondColor = prompt("Enter one more color to add at beginning:");

colors.unshift(firstColor, secondColor);
document.writeln("After adding two colors at beginning: " + colors + "<br><br>");

//DELETE FIRST COLOR
colors.shift();
document.writeln("After deleting first color: " + colors + "<br><br>");

//DELETE LAST COLOR
colors.pop();
document.writeln("After deleting last color: " + colors + "<br><br>");


//ADD COLOR AT SPECIFIC INDEX
var indexAdd = +prompt("At which index do u want to add color");
var colorAtIndex = prompt("Enter a color to add at index " + indexAdd + ":");

colors.splice(indexAdd, 0, colorAtIndex);
document.writeln("After adding at index " + indexAdd + ":" + colors + "<br><br>");


//DELETE COLORS FROM SPECIFIC INDEX
var deleteIndex = +prompt("At which index do u want to delete color");
var deleteCount = +prompt("How many colors do u want to delete?");

colors.splice(deleteIndex, deleteCount);
document.writeln("After deleting " + deleteCount + "color(s) from index" + deleteIndex + ":" + colors + "<br><br>");

//Question 4:
//SORT THE ARRAY IN ASCENDING ORDER
document.writeln("<h3>QUESTION 4:</h3>");

var StudentScore = [320 , 120, 324, 989, 343];
document.writeln("Student Score" + "=" + StudentScore + "<br><br>");

StudentScore.sort(function(a, b) {
  return a - b;
});
document.writeln("Sorted Scores (Ascending) = " + StudentScore);

// Question 5:
//COPY 3 ELEMENTS FROM CITIES ARRAY TO SELECTED CITIES ARRAY 
document.writeln("<h3>QUESTION 5:</h3>");

var city = ["Karachi ", "Lahore" , "Quetta" , "Peshawar" , "Islamabad ", "Peshawar"];
document.writeln("Cities List: " + "<br>" + city + "<br><br>");

//Copy 3 elements starting from index 2 (Quetta, Peshawar, Islamabad)
var selectedCities = city.slice(2, 5);//index 2 to 4 (5 is not included)

document.writeln("Selected Cities: " + selectedCities);

// Question 6:
//COPY 3 CREATE A SINGLE STRING METHOD
document.writeln("<h3>QUESTION 6:</h3>");

var arr = ["This ", "is ", "my ", "cat"];
var result = arr.join("");

document.writeln("Array: <br>" + arr + "<br>");
document.writeln("String: " + "<br>" + result);


// Question 7:
//{FIFO First in first out}
document.writeln("<h3>QUESTION 7:</h3>");

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.writeln("Devices: <br>" + devices + "<br><br>");

//show each device in order (FIFO)
for (var i = 0; i < devices.length; i++) {
    document.writeln("Out: <br>" + devices[i] + "<br>");
    
}

// Question 8:
//{LIFO Last in first out}
document.writeln("<h3>QUESTION 8:</h3>");

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.writeln("Devices: <br>" + devices + "<br><br>");

//show each device in order (LIFO)
for (var i = devices.length -1 ; i >= 0 ; i--) {
    document.writeln("Out: <br>" + devices[i] + "<br>");
    
}

// Question 9:
//Store phone manufacture DropDown
document.writeln("<h3>QUESTION 9:</h3>");

var devices = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.writeln("<select>");

for (var i=0; i<devices.length; i++){
    document.writeln("<option>" + devices[i] + "</option>");
}

document.writeln("</select>");

//----------------------------------END--------------------