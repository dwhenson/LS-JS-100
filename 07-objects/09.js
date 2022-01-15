// What does the following program log to the console? Why?

const foo = {
  a: "hello",
  b: "world",
};

const qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a); // hi - object properties can be mutated
console.log(qux); // hello - primatives cannot
