// Write a function similar to the oddLengths function from Exercise 6, but
// don't use map or filter. Instead, try to use the reduce method.:

const array = ["a", "abcd", "abcde", "abc", "ab"];

const oddLengths = function (array) {
  return array.reduce((accumulator, current) => {
    if (current.length % 2) {
      accumulator.push(current.length);
    }
    return accumulator; // Why do I need to add this??
  }, []);
};

console.log(oddLengths(array)); // => [1, 5, 3]
