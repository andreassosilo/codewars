// Codewars - Andreas Sosilo
// 5 kyu - Rot13

/*
Task:
-----
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13
letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If
there are numbers or special characters included in the string, they should be returned
as they are. Only letters from the latin/english alphabet should be shifted, like in the
original Rot13 "implementation".
*/

function rot13 (message) {
  // Create a variable to store the result
  let result = ''
  // Using for-loop to check each string element if it's an alphabet
  for (let i = 0; i < message.length; i++) {
    // Change to ASCII code
    let code = message[i].charCodeAt()
    let newCode = null
    // Check if it's an alphabet (upper & lower char) -> if yes, cipher using ROT13
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      if (message[i] === message[i].toLowerCase()) {
        if (code + 13 > 122) {
          newCode = code + 13 - 26
        } else {
          newCode = code + 13
        }
      } else if (message[i] === message[i].toUpperCase()) {
        if (code + 13 > 90) {
          newCode = code + 13 - 26
        } else {
          newCode = code + 13
        }
      }
    } else {
      newCode = code
    }
    // Save the new string result
    result += String.fromCharCode(newCode)
  }
  return result
}

// BEST SOLUTION
// function rot13 (message) {
//   var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }

// TEST CASES
console.log(rot13('Test')) // 'Grfg'
