#!/usr/bin/node

const number = parseInt(process.argv[2], 10);

const factorial = function (number = 0) {
  if (number === 0 || number === 1 || isNaN(number)) return 1;
  else return number * factorial(number - 1);
};

// Arrow functions could be used but they are not allowed in this task.

console.log(factorial(number));
