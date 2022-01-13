// Write a program named greeter.js that greets 'Victor' three times. Your
// program should use a variable and not hard code the string value 'Victor' in
// each greeting.

const greeter = function (name) {
  console.log(`
      Good morning ${name}
      Good afternoon ${name}
      Good eventing ${name}
  `);
};

greeter("Victor");
