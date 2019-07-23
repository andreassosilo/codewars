// Codewars
// 7 kyu - Mumbling

/*
Task:
-----
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum (s) {
  // Create a variable to accomodate the final string result
  let result = ''
  // Do first looping to check each character of input
  for (let i = 0; i < s.length; i++) {
    // If it is not the first index, add '-' to the string
    if (i !== 0) {
      result += '-'
    }
    // Second looping to add the character to result string
    for (let j = 1; j <= i + 1; j++) {
      // If it is the first addition, make the character upper case
      if (j === 1) {
        result += s[i].toUpperCase()
      } else { // If it the second time and so on, make the character lower case
        result += s[i].toLowerCase()
      }
    }
  }
  return result
}

// TEST CASES
console.log(accum('ZpglnRxqenU')) // 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
