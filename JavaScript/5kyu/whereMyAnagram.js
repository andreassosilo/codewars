// Codewars - Andreas Sosilo
// 5 kyu - Where my anagrams at?

/*
Task:
-----
What is an anagram? Well, two words are anagrams of each other if they both contain
the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be
given two inputs a word and an array with words. You should return an array of all the
anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams (word, words) {
  // Create array to accomodate the result
  let result = []
  // Sort the word
  word = word.split('').sort().join('')
  // console.log(word)
  // Do looping to check each element in the array input 'words'
  for (let i = 0; i < words.length; i++) {
    // Splice and sort the current index element
    let temp = words[i].split('').sort().join('')
    // console.log(temp)
    if (temp === word) {
      result.push(words[i])
    }
  }
  return result
}

// Using Array.from() and new Set() --> to find unique element from object/array and return new array
// let b = Array.from(new Set(word.split('')))

// // BEST PRACTICES
// function anagrams (word, words) {
//   return words.filter(function (e) {
//     return e.split('').sort().join('') === word.split('').sort().join('')
//   })
// }

// TEST CASES
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])) // []
