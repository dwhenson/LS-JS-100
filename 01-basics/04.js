// Explain why this code logs '510' instead of 15.

console.log("5" + 10);

// Type coercion. JS cannot add a number and a string so
// the number is converted to a string and concatenated.
