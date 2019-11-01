'use strict'

// Codewars - Andreas Sosilo
// 7 kyu - Two to One

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest (s1, s2) {
  const result = []
  // Combine both strings using concat, split the string into array and sort the alphabet
  const temp = s1.concat(s2).split('').sort()

  // Use reduce to compare and push the distinct letter
  temp.reduce((previous, current) => {
    if (current !== previous) {
      result.push(current)
      return current
    } else {
      return previous
    }
  }, 0)

  // Join the string and return the result
  return result.join('')
}

// BEST PRACTICE
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// TEST CASES
const a = 'xyaabbbccccdefww'
const b = 'xxxxyyyyabklmopq'
console.log(longest(a, b)) // 'abcdefklmopqwxy'
