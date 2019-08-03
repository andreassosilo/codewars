// Codewars - Andreas Sosilo
// 7 kyu - Shortest Word

/*
Task:
-----
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort (s) {
  // Create a variable to return the shortest word
  let short = s.length
  // Split the input string into array of words
  s = s.split(' ')
  // Using for-loop to check the length of each array elements
  for (let i = 0; i < s.length; i++) {
    if (s[i].length < short) {
      short = s[i].length
    }
  }
  return short
}

// BEST SOLUTION
// function findShort (s){
//   return Math.min.apply(null, s.split(' ').map(w => w.length));
// }

// TEST CASES
console.log(findShort('bitcoin take over the world maybe who knows perhaps')) // 3
