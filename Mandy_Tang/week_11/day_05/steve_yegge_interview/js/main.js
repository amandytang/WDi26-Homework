$(document).ready( function () {

// Steve Yegge Coding Test Questions


// Write a function to reverse a string.

// Solution 1: Split, reverse, join
const reverseString = (str) => {
  // can't call reverse on a string directly in js so split into array first
  let splitString = str.split("");
  let reversedArray = splitString.reverse();
  let joinedArray = reversedArray.join("");
  console.log(joinedArray);
  return joinedArray;
}

reverseString('testing')

// Solution 2: Decrementing loop

const reverseWithLoop = (string) => {
  let reversedString = ""; // to hold result
  for (let i = string.length - 1; i >= 0;  i--) { // making the last character the first
    reversedString = reversedString + string[i];
  }
  console.log(reversedString);
  return reversedString;
}

reverseString('loop')


// Write function to compute Nth fibonacci number:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// fibBasic: this uses recursion, will work and demonstrates the maths but is very inefficient because with each 'loop', the computer needs to keep track of and process what fibBasic(n - 2) and fibBasic(n - 1) are
const fibBasic = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fibBasic(n - 2) + fibBasic(n - 1);
  }
}

console.log(fibBasic(7));

// fibIterative: iterative and much faster version because for every iteration from n == 10 to n == 1, computer does nothing more than summing up a and b and subtracting 1 from n. Finally, when n is 0, it returns b
// This uses ES6 array destructuring that makes it possible to unpack values from arrays into distinct variables
const fibIterative = (num) => {
  let [a, b] = [1, 0];
  while (num-- > 0) {
    [a, b] = [b + a, a];
  }
  return b;
}

console.log(fibIterative(7));

// Print out the grade-school multiplication table up to 12x12
const timesTable = () => {
  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
      console.log(i*j);
    }
  }
}

timesTable();

// Write a function that sums up integers from a text file, one int per line.
// Look at ruby file

// Write function to print the odd numbers from 1 to 99.
const isOdd = () => {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0)
      console.log(i);
  }
}

isOdd();

// Find the largest int value in an int array.
let array = [1, 3, 2, 42];

console.log(Math.max(...array));


// TODO: Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string.




}); // end of docready
