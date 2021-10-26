// Codewars - Andreas Sosilo
// 8 kyu - A Needle in the Haystack

/*
Task:
-----
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

JavaScript & TypeScript:
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

should return:
"found the needle at position 5"
*/

function findNeedle (haystack) {
  // Use Array.indexOf() to find the index of target element
  return `found the needle at position ${haystack.indexOf('needle')}`
}

// TEST CASES
const haystack = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']
console.log(findNeedle(haystack)) // 'found the needle at position 5'
