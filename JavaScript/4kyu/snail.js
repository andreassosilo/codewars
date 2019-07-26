// Codewars
// 4 kyu - Snail

/*
Task:
-----
Snail Sort

Given an n x n array, return the array elements arranged from outermost elements
to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]

snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]

snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest;
the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as [[]]
*/

function snail (array) {
  // Define new array to save the result
  let snailArr = []
  // Looping until all the array elements are pushed into the new array
  while (array.length) {
    //  Get the first row and push it to new array (... duplicate/.concat())
    snailArr.push(...array.shift())
    // Get the right items and push to the new array
    for (let i = 0; i < array.length; i++) {
      snailArr.push(array[i].pop())
    }
    // Get the bottom row and push it to the new array
    snailArr.push(...(array.pop() || []).reverse())
    // Get the left items -> push to the new array
    for (let i = array.length - 1; i >= 0; i--) {
      snailArr.push(array[i].shift())
    }
  }
  // Return new array
  return snailArr
}

// TEST CASES
console.log(snail([[]])) // []
console.log(snail([[1]])) // [1]
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [1, 2, 3, 6, 9, 8, 7, 4, 5]
