// Codewars - Andreas Sosilo
// 8 kyu - Return Negative

/*
Task:
-----
In this simple assignment you are given a number and have to make it negative.
But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative (num) {
  // Check if the number is positive value, then reverse to negative value.
  return num > 0 ? -num : num
}

// TEST CASES
console.log(makeNegative(-5))// return -5
console.log(makeNegative(0)) // return 0
console.log(makeNegative(0.12)) // return -0.12
