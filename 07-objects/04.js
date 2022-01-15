// Create an array from the keys of the object obj below, with all of the keys
// converted to uppercase. Your implementation must not mutate obj.

const object = {
  b: 2,
  a: 1,
  c: 3,
}; // ?

const array = Object.keys(object).map((key) => key.toUpperCase()); // ?
// for (const item of array) item.toUpperCase(); // ?
