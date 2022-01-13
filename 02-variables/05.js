// What does this program log to the console? Why?

const foo = "bar";
{
  const foo = "qux";
}

console.log(foo);

// 'Bar' as 'qux' is not accessible
