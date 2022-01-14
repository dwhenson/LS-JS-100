// Write a function that computes and returns the factorial of a number by using
// a for loop. The factorial of a positive integer n, signified by n!, is
// defined as the product of all integers between 1 and n, inclusive:

const factorial = function (number) {
  let sum = 1;
  for (let number_ = 1; number_ <= number; number_ += 1) {
    sum *= number_;
  }
  return sum;
};

factorial(5);
