#!/usr/bin/node
const num = parseInt(process.argv[2], 10);
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);

// Another Solution
// console.log(isNaN(num) ? 'Not a number' : 'My number: ' + num);
// Note for self:
// Don't mix template style with concatenation style.
//
// No need to wrap in `${}`; the ternary if expression already evaluates to a string.
// console.log(`${isNaN(num) ? 'Not a number' : `My number: ${num}`}`);
// ===
// console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
