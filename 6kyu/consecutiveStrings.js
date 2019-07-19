// Codewars
// 6 kyu - Consecutive strings

/*
Task:
-----
You are given an array strarr of strings and an integer k.
Your task is to return the first longest string consisting of k
consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas",
"theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/

function longestConsec (strarr, k) {
  let longest = ''
  let n = strarr.length
  // Check for the initial condition first
  if (n === 0 || k > n || k <= 0) {
    return longest
  }
  // Check the length of each consecutive k strings in the array
  for (let i = 0; i < n; i++) {
    let currentStr = strarr.slice(i, k + i).join('')
    if (currentStr.length > longest.length) {
      longest = currentStr
    }
  }
  return longest
}

// TEST CASES
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)) // 'abigailtheta'
console.log(longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1)) // 'oocccffuucccjjjkkkjyyyeehh'
console.log(longestConsec([], 3)) // ''
