// Codewars - Andreas Sosilo
// 4 kyu - Sum Strings as Numbers

/*
Task:
-----
Given the string representations of two integers, return the string representation of the
sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals
"0" to "9".
*/

function sumStrings (num1, num2) {
  // Removes 0s in the beginning of the string input
  while (num1.length > 1 && num1[0] === '0') num1 = num1.slice(1)
  while (num2.length > 1 && num2[0] === '0') num2 = num2.slice(1)

  // Reverse the string
  num1 = num1.split('').reverse().join('')
  num2 = num2.split('').reverse().join('')

  let carry = 0
  let ans = ''
  let len = num1.length > num2.length ? num1.length : num2.length

  for (let i = 0; i < len; i++) {
    // Check first, if there is still element in the current index for both inputs
    let a = i < num1.length ? Number(num1[i]) : 0
    let b = i < num2.length ? Number(num2[i]) : 0

    let c = a + b + carry
    ans += String(c % 10)
    carry = c >= 10 ? 1 : 0
  }

  // If there is still carry, add it to the answer
  if (carry) ans += carry

  return ans.split('').reverse().join('')
}

// TEST CASES
console.log(sumStrings('123', '456')) // '579'
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')) // '712577413488402631964821329'
