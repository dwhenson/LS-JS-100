// What does this code log to the console? Does executing the foo function
// affect the output? Why or why not?

const bar = 1;
function foo() {
  const bar = 2;
}

foo();
console.log(bar);

// Logs 1. No effect as the two variables are in different scopes
