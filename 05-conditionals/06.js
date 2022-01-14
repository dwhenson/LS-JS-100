// What does this code output to the console?

// return foo() ? 'bar' : qux();

function isArrayEmpty(array) {
  if (array) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

isArrayEmpty([]); // "Not empty"
