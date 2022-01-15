// Log all of the even values from myArray to the console.

const myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.map((number) => (number % 2 ? "Even" : "Odd"));
