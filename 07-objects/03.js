// Use object literal syntax (e.g., { key: value, ... } notation) to create an
// object that behaves as an array in a for statement. The object should contain
// at least 3 elements. You should place your code between the braces in the let
// statement:

const myArray = {
  0: "zero",
  1: "first",
  2: "second",
  length: 3,
};

for (const element in myArray) {
  console.log(myArray[element]);
}
