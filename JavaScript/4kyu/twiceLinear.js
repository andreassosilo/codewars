// Codewars
// 4 kyu - Twice linear

/*
Task:
-----
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency
*/

function dblLinear (n) {
  // Create new array to accomodate result, and initiated the first index with value 1
  let result = [1]
  // Create counter for y and z
  let countY = 0
  let countZ = 0
  // Do looping until the array length reach 'n'
  while (result.length <= n) {
    // Given formula from instruction to calculate y and z
    let y = 2 * result[countY] + 1
    let z = 3 * result[countZ] + 1
    // Conditional: to check which value is the smallest one, to sort directly
    if (y < z) {
      result.push(y)
      countY++
    } else if (z < y) {
      result.push(z)
      countZ++
    } else {
      result.push(y)
      countY++
      countZ++
    }
  }
  return result[n]
}

// 10 : [1, 3, 4, 7, 10  ] 1
// n : [1, y1, z1, y2, z2, y3, z3 ....]
// u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// TEST CASES
console.log(dblLinear(10)) // 22
console.log(dblLinear(30)) // 91
