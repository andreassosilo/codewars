// Codewars
// 8 kyu - Find the smallest integer in the array

/*
Task:
-----
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
  findSmallestInt (args) {
    // Create a variable to accomodate the smalles value, assign with the first array index
    let smallest = args[0]
    // Looping to check every other value in the next index
    for (let i = 0; i < args.length; i++) {
      if (args[i] < smallest) { smallest = args[i] }
    }
    return smallest
  }
}

// BEST SOLUTION : Using Math.min() with spread syntax
// class SmallestIntegerFinder {
//   findSmallestInt (args) {
//     return Math.min(...args)
//   }
// }

// TEST CASES
let sif = new SmallestIntegerFinder()
console.log(sif.findSmallestInt([78, 56, 232, 12, 8])) // 8
