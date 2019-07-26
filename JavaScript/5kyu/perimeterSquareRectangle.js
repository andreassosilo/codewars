// Codewars
// 5 kyu - Perimeter of squares in a rectangle

/*
Task:
-----
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8.
It's easy to see that the sum of the perimeters of these squares is :
4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when
there are n + 1 squares disposed in the same manner as in the drawing:

#Hint: See Fibonacci sequence

The function perimeter has for parameter n where n + 1 is the number of squares
(they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216
*/

function perimeter (n) {
  // Create variable to accomodate the total of the fibonacci sequence
  let total = 0
  // Create 3 variables: n (first), n-1 (second), n-2 (third)
  let first = 1
  let second = 1
  let third = null
  // Do looping to sum the total fibonnaci number up until n+1
  for (let i = 0; i < n + 1; i++) {
    third = first + second
    total += first
    first = second
    second = third
  }
  // Return the sum of perimeters of these square
  return 4 * total
}

// TEST CASES
console.log(perimeter(5)) // 80
console.log(perimeter(7)) // 216
