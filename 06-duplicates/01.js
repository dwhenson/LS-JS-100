// Modify the age.js program you wrote in the exercises for the Input/Output
// chapter. The updated code should use a for loop to display the future ages.

// const readlineSync = require("readline-sync");
// const age = Number(readlineSync.question("How old are you? "));
// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);

const readlineSync = require("readline-sync");
let age = readlineSync.question("How old are you? ");
age = Number.parseInt(age);
console.log(`You are ${age} years old.`);
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}
