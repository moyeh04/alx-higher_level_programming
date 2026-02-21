#!/usr/bin/node
const num = parseInt(process.argv[2], 10);
if (isNaN(num)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      process.stdout.write('X');
    }
    console.log('');
  }
}

// Note for self:
// Another solution:
//
// for (let i = 0; i < num; i++) {
//   console.log('X'.repeat(num));
// }
//
// What's happening:
//   'X'.repeat(num)     → builds the FULL row as one string e.g. 'XXXXX'
//   console.log(...)    → prints it and automatically adds a newline at the end
//   outer loop runs num times → prints num rows
//   That is still 2 loops - .repeat() handles the inner row, and console.log adds the newline.
//   The outer loop is still needed to print num rows.
//
// This replaces:
//   - the inner j-loop (which printed X one character at a time)
//   - the console.log('') hack (which was manually adding the newline)
