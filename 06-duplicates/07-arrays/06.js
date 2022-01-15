// Use map and filter to first determine the lengths of all the elements in an
// array of string values, then discard the even values (keep the odd values).

const array = ["a", "abcd", "abcde", "abc", "ab"];
// console.log(oddLengths(array)); // => [1, 5, 3]

array.map((item) => item.length).filter((itemLength) => itemLength % 2); // ?
