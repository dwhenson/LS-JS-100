// Let's make the problem a little harder. In this problem, we're again
// interested in even numbers, but this time the numbers are in nested arrays in
// a single outer array.
// @type       {Array}

const myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (const item of myArray) {
  for (const subItem of item) {
    if (subItem % 2 === 0) {
      console.log(subItem);
    }
  }
}
