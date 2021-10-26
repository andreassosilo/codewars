// Codewars - Andreas Sosilo
// 8 kyu - Calculate average

/*
Task:
-----
Write function avg which calculates average of numbers in given list.
*/

function find_average(array) {
  // Use reduce() to sum all the elements and divided by array length
  return array.reduce((sum, element) => { return sum + element }) / array.length
}

// TEST CASES
console.log(find_average([1, 2, 3])) // 2