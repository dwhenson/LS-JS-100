// Write a program that uses a multiply function to multiply two numbers and
// returns the result. Ask the user to enter the two numbers, then output the
// numbers and result as a simple equation.

// Example
// $ node multiply.js
// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566

const multiply = function () {
  const rlSync = require("readline-sync");
  const number1 = rlSync.question("What's your first number? ");
  const number2 = rlSync.question("What's your second number? ");
  const answer = `${number1} times ${number2} is ${number1 * number2}`;
  console.log(answer);
};

multiply();
