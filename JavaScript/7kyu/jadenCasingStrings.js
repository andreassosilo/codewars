// Codewars - Andreas Sosilo
// 7 kyu - Jaden Casing Strings

/*
Task:
-----
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010)
and After Earth (2013). Jaden is also known for some of his philosophy that he delivers
via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are
actual quotes from Jaden Smith, but they are not capitalized in the same way he originally
typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
  // Create variable to accomodate the result and flag for isCapital
  let result = ''
  let isCapital = true
  // Do for-loop to check each char in the input string
  for (let i = 0; i < this.length; i++) {
    if (isCapital) {
      result += this[i].toUpperCase()
      isCapital = false
    } else {
      result += this[i]
    }
    if (this[i] === ' ') isCapital = true
  }
  return result
}

// BEST SOLUTION
// String.prototype.toJadenCase = function () {
//   return this.split(' ').map(function (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   }).join(' ')
// }

// TEST CASES
var str = "How can mirrors be real if our eyes aren't real"
console.log(str.toJadenCase()) // 'How Can Mirrors Be Real If Our Eyes Aren't Real")'
