//
// Let's improve our previous implementation of evenOrOdd. Add a validation
// check to ensure that the argument is an integer. If it isn't, the function
// should issue an error message and return.

const oddOrEven = function (number) {
  if (isNaN(number)) {
    console.error("Not a number");
    return;
  }
  return number % 2 ? "Odd" : "Even";
};

oddOrEven("work"); // ?
