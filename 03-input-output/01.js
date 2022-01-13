// Write a dynamic greeter program named greeter.js. The program should ask for
// your name, then output Hello, {name}! where {name} is the name you entered:

const rlSync = require("readline-sync");
const name = rlSync.question("What's your name?\n");
console.log(`Hello, ${name}!`);
