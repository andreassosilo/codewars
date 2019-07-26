// Codewars
// 5 kyu - Simple Pig Latin

/*
Task:
-----
Move the first letter of each word to the end of it, then add
"ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt (str) {
  let result = []
  // Split sentence into component parts
  let newStr = str.split(' ')
  // Iterate through them doing the conversation
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== '?' && newStr[i] !== '!' && newStr[i] !== '.') {
      let word = newStr[i]
      let firstLetter = word.charAt(0)
      let newWord = word.slice(1) + firstLetter + 'ay'
      result.push(newWord)
    } else {
      result.push(newStr[i])
    }
  }
  // Lastly join the array together into sentences
  return result.join(' ')
}

// TEST CASES
console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')) // elloHay orldway !
