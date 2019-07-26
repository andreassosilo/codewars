// Codewars
// 8 kyu - String repeat

/*
Task:
-----
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
  let result = ''
  for (let i = 0; i < n; i++) {
    result += s
  }
  return result
}

// BEST SOLUTION --> using String built-in function repeat()
// function repeatStr (n, s) {
//   return s.repeat(n)
// }

// TEST CASES
console.log(repeatStr(5, 'Hello')) // "HelloHelloHelloHelloHello"
