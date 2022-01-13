const rlSync = require("readline-sync");

const number1 = Number(rlSync.question("Enter the first number\n"));
const number2 = Number(rlSync.question("Enter the second number\n"));
const sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);
