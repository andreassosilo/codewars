'use strict'
// Codewars - Andreas Sosilo
// 6 kyu - Find the unique number

/*
Task:
-----
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of
the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
Don't mutate the inputs.
*/

function inArray (array1, array2) {
  // Create empty array to accomodate the result
  const result = []
  // Use nested for-loops to check the input -> use includes()
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        let isDuplicate = false
        for (let k = 0; k < result.length; k++) {
          if (array1[i] === result[k]) isDuplicate = true
        }
        if (!isDuplicate) result.push(array1[i])
      }
    }
  }
  // Sort the result alphabetically
  return result.sort()
}

// TEST CASES
const a1 = ['xyz', 'live', 'strong']
const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']
console.log(inArray(a1, a2)) // ["live", "strong"]
