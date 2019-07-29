// Codewars - Andreas Sosilo
// 8 kyu - Convert a String to a Number!

/*
Task:
-----
Consider an array of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps (arrayOfSheep) {
  if (arrayOfSheep === null || arrayOfSheep === undefined) return `There are no sheeps at all`
  // Creat a variable to count the true sheep
  let count = 0
  // Using for-in loop to check the true sheeps
  for (let key in arrayOfSheep) {
    if (arrayOfSheep[key] === true) {
      count++
    }
  }
  // Return the number of true sheeps
  return count
}

// BEST SOLUTION USING FILTER
// function countSheeps (arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length
// }

// TEST CASES
var array1 =
[
  true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true
]
console.log(countSheeps(array1)) // 'There are 17 sheeps in total'
