// What does this code log to the console? Does executing the foo function
// affect the output? Why or why not?

const getNames = function (question) {
  const rlSync = require("readline-sync");
  const name = rlSync.question(question);
  return name;
};

const firstName = getNames("What is your first name? ");
const lastName = getNames("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);
