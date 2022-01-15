// Write a function that searches an array of strings for every element that
// matches the regular expression given by its argument. The function should
// return all matching elements in an array.

const words = ["laboratory", "experiment", "flab", "Pans Labyrinth", "elaborate", "polar bear"];

const allMatches = function (array, regex) {
  return array.filter((word) => word.match(regex));
};

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
