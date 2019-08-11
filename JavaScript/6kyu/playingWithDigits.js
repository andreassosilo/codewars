// Codewars
// 6 kyu - Playing with digits

/*
Task:
-----
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a
positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of
n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.
*/

function digPow (n, p) {
  // Create variable sum
  let sum = 0
  // Separate each digit into array
  let arr = n.toString().split('')

  // Do looping to get each number power of p
  for (let i = 0; i < arr.length; i++, p++) {
    let value = Math.pow(Number(arr[i]), p)
    sum += value
  }

  const k = sum / n

  return (k % 1 === 0) ? k : -1
}

// TEST CASES
console.log(digPow(89, 1)) // 1
console.log(digPow(92, 1)) // -1
console.log(digPow(46288, 3)) // 51
