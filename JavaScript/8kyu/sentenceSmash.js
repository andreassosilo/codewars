// Codewars
// 8 kyu - Sentence Smash

/*
Task:
-----
Write a method smash that takes an array of words and smashes them together
into a sentence and returns the sentence. You can ignore any need to sanitize
words or add punctuation, but you should add spaces between each word. Be careful,
there shouldn't be a space at the beginning or the end of the sentence!
*/

// Smash Words
function smash (words) {
  let newWords = ''
  for (let i = 0; i < words.length; i++) {
    if (i === words.length - 1) {
      newWords += words[i]
    } else {
      newWords = newWords + words[i] + ' '
    }
  }
  return newWords
}

// TEST CASES
console.log(smash(['hello', 'world'])) // 'hello world'
