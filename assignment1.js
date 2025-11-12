// name:Karwigi Favour Kendi
// country:Kenya
//City:Thika

1.//Variable Declaration and Data Types
//a.Declare and initialize one variable for each of the following javascript data types:

let name = "Favour";  //string
let age = 21;         //Number
let isStudent = true;   //Boolean
let country ;           //undefined

//console.log /output
console.log(name);
console.log(age);
console.log(isStudent);
console.log(country);

//Checking Data Type
console.log(typeof name);        //type checking
console.log(typeof age);         //type checking
console.log(typeof isStudent);   //type checking
console.log(typeof country);     //type checking

//2.Object and Array Representation
//Create a Javascript object and array that represent data about one of your fellow students

//object
const jacobsInfo = {
    name : "Jacob",
    age : 23,
    course : "Fronted Developer",
    skills : "Fronted Skills"

}

console.log(jacobsInfo);

//Array
const jacobsFavoriteModule1Topics = ["JavaScript DataTypes" ,"javascript operators" ,"javascript Type conversion"];

//execution
console.log(jacobsFavoriteModule1Topics);

//using Array method add two more topics to the existing created array.
//The Array
const otherTopics = ["History Of Javascript" , "How Javascript Works Behind the Scenes"];

//execution
console.log(otherTopics)

//3.(Type Conversion Practise)

//convert a number to a String using String()
let a = 3;     //number
a = String(3);   //conversion
console.log(a);
console.log(typeof a);  //Type Checking

//Convert a String to a number using Number()
let b = "3";  //string
b = Number("3");
console.log(b);
console.log(typeof b);

//convert a boolean to a string using String()
let isLearningJavascript = true;
isLearningJavascript = String(true);
console.log(isLearningJavascript);

//4. What is Concurrency model?
// it defines how a program handles multiple tasks at the same time.

/*
5.What do we mean by Javascript Syntax?
Answer..This is the set of rules that define how javascript programs should be written and understood by the computer
*/

/*6. Explain the Difference between implicit and explicit conversion with an example*/
/*1. Implicit Conversion

Happens automatically by JavaScript.
JS changes the type for you without you doing anything.

Example:
let num = 5;
let str = "10";
console.log(num + str);  // "510"

Here, 5 (number) is automatically converted to a string to join with "10".
*/

/*2. Explicit Conversion

Happens when you manually convert a value to another type
You actually tell JS exactly what to do

Example:

let num = 5;
let str = "10";
console.log(num + Number(str));  // 15

Here, "10" is explicitly converted to number using Number().
*/

/*6. Explain the difference between interpreted and compiled programming language

Compiled Language
The whole program is translated into machine code first, before it runs.Runs faster because the computer can execute the instructions directly

Examples: C, C++, Rust

Interpreted Language

The program is read and executed line by line while it run.Slower because translation happens as the program runs

Examples: JavaScript, Python
*/

/*
7.code exercise:(Please copy and paste on your IDE )
Carefully analyze the code snippet below.
*/
function multiplyNumbers(num1 ,num2){
    let result = num1 +num2;
    console.log("The Multiplication of " + num1 +"and" + num2 +"is" + results);
}

multiplyNumbers(4,5);

//1.Explain in your own words what the code is intended to do

//Answer...In my own understanding the code is intended to  multiply num1 which is 4 and num2 which is 5
//The multiplication  operation is done on this line of code (let result=num1*num2;)
//After the multiplication is done Concatenation will take place where we are concatenating strings and numbers and also its meant to print the statement "The Multiplication of 4 and 5 is :20"
//Then the call function is intended to call out the function ...what wil be called here is the concatenation part


//Identify and correct any errors present in the code
//The error present in the code is Reference error where "results" is not defined 
//The variable declared was result and not results
//To write the correct version the variable declared which was "result" should also be the one during conctenation we should just get rid of the "s" in "results"
//Here is the correct version
/*
function multiplyNumbers(num1 ,num2){
        let result = num1 * num2;
        console.log("The Multiplication of" +num1+ "and" +num2+ "is" +result);

}

multiplyNumbers(4,5);

The output will be :
The Multiplication of 4 and 5 is: 20
*/


//Test your corrected version to confirm it works as expected


function multiplyNumbers(num1 ,num2){
    let result = num1 +num2;
    console.log("The Multiplication of " + num1 +"and" + num2 +"is" + result);
}

multiplyNumbers(4,5);

//8.Study the following javascript code carefully and answer the questions below:
function multiply(a,b){
    return a*b;
}
function calculateProduct(num1 ,num2){
    let result = multiply(num1,num2);
    return `The product of +num1 and num2 + is result`;
}

//calling the main function
console.log(calculateProduct(6,4,2));


//Explain in your own words what the above code does ,step by step
/*
The code starts by creating a function called (multiply)  that takes two numbers (a,b) this are parameters and multiplies them
Next ,another function that is next called (calculateProduct) is created it takes two numbers/parameters(num1 ,num2)
inside  it it calls the multiply function to get the product and it stores it in a variable called result
Next it returns a sentence ,but the sentence is written wrongly ,instead of showing the actual numbers that is in the variable ,it just returns the text exactly as it is written no actual numbers willl be shown in the text
next we have the statement of console.log next this is where the output of the text will be ,like its where we expect the output in the console or browser
in the console.log  this is where there is the argument and it has three arguments unlike in the parameter where there are two parameters
so since its multiplication of num1 and num2 (num1 and num2 are parameters) it will take the first argument(6) make it to be num1 and take argument2 which is (4) and multiply the two and then for the third argument it will ignore it it will multiply the two (6*4) the result will be 24
but since the return part statement isnt written properly to display numbers and result it will show the text (the return with the backticks)
so the final answer that will be displayed when you run the code will be The product of +num1 and num2 + is result
*/

// 2.identify which function actually perfoms the multiplication and which one returns the final message

// multiply(a,b) performs the multiplication  (a,b)

//calculateProduct(num1 ,num2) this returns the final message

// 3.state what the output of this code will be when you run
//The product of +num1 and num2 + is result

//modify the code so that it multiplies three numbers instead of two ,while maintaining the same structure (one function calls another)

function multiply(a, b, c) {
    return a * b * c;
}

function calculateProduct(num1, num2, num3) {
    let result = multiply(num1, num2, num3);
    return `The product of ${num1}, ${num2}, and ${num3} is ${result}`;
}

// calling the main function
console.log(calculateProduct(6, 4, 2));

// 9. write a script that multiplies the area and parameter of a rectangle using arithmetic operators

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width; // area = length × width
}

// Function to calculate the perimeter of a rectangle
function calculatePerimeter(length, width) {
    return 2 * (length + width); // perimeter = 2 × (length + width)
}

// Main function that calls both
function rectangleCalculations(length, width) {
    let area = calculateArea(length, width);    //area
    let perimeter = calculatePerimeter(length, width);   //perimeter

    return `For a rectangle with length ${length} and width ${width}:
Area = ${area}
Perimeter = ${perimeter}`;     //statement for return
}

// Calling the main function
console.log(rectangleCalculations(8, 5));


// 10.instructions
/* 
using your knowledge of javascript operators ,answer the following questions and write the appropriate code examples for each  . Apply arithmetic ,comparison ,logical ,assignment and ternary operators where necessary
*/

//Questions:
// 1. Arithmetic Operators:
/*
Write a javascript program that calculates the sum ,difference ,product ,quotient and reminder of two numbers .Display all the results in the console
*/
let firstNumber = 12;
let secondNumber = 3;

let sum = (firstNumber + secondNumber);
let difference = (firstNumber - secondNumber);
let product = (firstNumber *secondNumber);
let quotient = (firstNumber / secondNumber);
let reminder = (firstNumber % secondNumber);

//consoling
console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);
console.log(`The difference of ${firstNumber} and ${secondNumber} is ${difference}`);
console.log(`The product of ${firstNumber} and ${secondNumber} is ${product}`)
console.log(`The quotient of ${firstNumber} and ${secondNumber} is ${quotient}`)
console.log(`The reminder of ${firstNumber} and ${secondNumber} is ${reminder}`)

// 2.comparison Operators
/*
create a program that compares two numbers and logs whether they are equal ,not equal ,greater than ,or less than each other
*/

// Two numbers
let num1 = 10;
let num2 = 15;

// Compare and log using ternary operators
let equality = num1 === num2 ? "equal" : "not equal";
let magnitude = num1 > num2 ? "greater than" : (num1 < num2 ? "less than" : "equal to");

console.log(`${num1} and ${num2} are ${equality}`);
console.log(`${num1} is ${magnitude} ${num2}`);


//3. Logical operators 
/*write a program that checkd if a person is eligible to vote.
conditions :age must be 18 or above and nationality must be "Nigerian"
use the logical AND(&&) and OR (||) operators */

// Person details
let age1 = 20;
let nationality = "Nigerian";

// Check eligibility using ternary operator
let eligibility = (age1 >= 18 && nationality === "Nigerian") 
                  ? "Eligible to vote" 
                  : "Not eligible to vote";

// Display the result
console.log(`Age: ${age1}, Nationality: ${nationality} : ${eligibility}`);


//6. Assignment operators:
/*Declare a variable with an initial value of 10.
then use assignment operators (+= ,-= ,*= ,/= ,%=) to modify its value with other choice values step by step
log the result after each operation */



// Step 1: Declare a variable with initial value
let num = 10;
console.log(`Initial value: ${num}`);

// Step 2: Use += (addition assignment)
num += 5;  // num = num + 5
console.log(`After += 5: ${num}`);

// Step 3: Use -= (subtraction assignment)
num -= 3;  // num = num - 3
console.log(`After -= 3: ${num}`);

// Step 4: Use *= (multiplication assignment)
num *= 2;  // num = num * 2
console.log(`After *= 2: ${num}`);

// Step 5: Use /= (quotient assignment)
num /= 4;  // num = num / 4
console.log(`After /= 4: ${num}`);

// Step 6: Use %= (modulus assignment)
num %= 3;  // num = num % 3
console.log(`After %= 3: ${num}`);


// 7 Ternary operators
/* Write a script that checks whether a number is even or odd using ternary operator .
Example Output : 8 is an even number
*/

// Number to check
let number1 = 10;

// Check even or odd using ternary operator
let result = (number1 % 2 === 0) ? "even" : "odd";

// Display the result
console.log(`${number1} is an ${result} number`);





















