alert("Hi, Something is wrong!");

let firstNumber = prompt('Enter first number here: ');
let secondNumber = prompt("Enter second number here: ");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

document.write("The frist number: ", firstNumber + "<br>");
document.write("The second number: ", secondNumber +"<br>");

const sum = firstNumber + secondNumber;
document.write("Sum of: ", sum);