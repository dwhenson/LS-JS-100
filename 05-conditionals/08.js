// Write a function that logs whether a number is between 0 and 50 (inclusive),
// between 51 and 100 (inclusive), greater than 100, or less than 0.

const range = function (numberToCheck) {
  switch (numberToCheck) {
    case numberToCheck >= 0 && numberToCheck <= 50:
      console.log(`${numberToCheck} is between 0 and 50`);
      break;
    case numberToCheck >= 51 && numberToCheck <= 100:
      console.log(`${numberToCheck} is between 51 and 100`);
      break;
    case numberToCheck > 100:
      console.log(`${numberToCheck} is greater than 100`);
      break;
    case numberToCheck < 0:
      console.log(`${numberToCheck} is less than 0`);
      break;
    default:
      console.log("Something didn't work did you pass in a number");
  }
};
