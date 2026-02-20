#!/usr/bin/node
const num = parseInt(process.argv[2], 10);
if (isNaN(num)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < num; i++) {
    console.log('C is fun');
  }
}

// Note for self:
// You don't need another nested condition,
// since the for loop already validates against negative input implictly.
