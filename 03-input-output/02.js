// Write a dynamic greeter program named greeter.js. The program should ask for
// your name, then output Hello, {name}! where {name} is the name you entered:

const rlSync = require("readline-sync");
const firstName = rlSync.question("What's your first name?\n");
const lastName = rlSync.question("What's your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
