// Use reduce to compute the sum of the squares of all of the numbers in an array:

const array = [3, 5, 7];

const sumOfSquares = function (array) {
  return array.reduce((accumulator, current) => (accumulator += current * current), 0);
};
console.log(sumOfSquares(array));
