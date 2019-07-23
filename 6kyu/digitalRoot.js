// Codewars
// 6 kyu - Sum of Digits / Digital Root

/*
Task:
-----
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works:

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6
*/

function digital_root (n) {
  let arr = n.toString()
  if (arr.length === 1) {
    return n
  } else {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i])
    }
    return digital_root(sum)
  }
}

// TEST CASES
console.log(digital_root(16)) // 7
console.log(digital_root(456)) // 6
