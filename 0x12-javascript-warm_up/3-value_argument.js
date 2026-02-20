#!/usr/bin/node
const firstArg = 2;
if (process.argv[firstArg] !== undefined) {
  console.log(process.argv[firstArg]);
} else {
  console.log('No argument');
}
