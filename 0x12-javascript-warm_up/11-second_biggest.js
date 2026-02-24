#!/usr/bin/node

const argv = process.argv
  .slice(2)
  .map(Number)
  .filter((n) => Number.isFinite(n));

if (argv.length < 2) {
  console.log(0);
} else {
  console.log(argv.sort((a, b) => b - a).slice(1, 2)[0]);
}

// Another Solution:
// argv.sort((a, b) => b - a);
// console.log(argv[1]);
