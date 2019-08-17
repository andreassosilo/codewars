'use strict'
// Codewars - Andreas Sosilo
// 6 kyu - A String of Sorts

/*
Task:
-----
Define a method that accepts 2 strings as parameters. The method returns the first
string sorted by the second.

sortString("foos", "of")       => "oofs"

sortString("string", "gnirts") => "gnirts"

sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering. It is possible that in the second
string characters repeat, so you should remove repeating characters, leaving only the
first occurrence.

Any character in the first string that does not appear in the second string should be
sorted to the end of the result in original order.
*/

function sortString (string, ordering) {
  let result = ''
  for (let i = 0; i < ordering.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (ordering[i] === string[j]) {
        result += string[j]
      }
    }
    // Using new RegExp(string) to build a regular expression dynamically
    const regex = new RegExp(ordering[i], 'gi')
    string = string.replace(regex, '')
  }

  return result + string
}

// TEST CASES
console.log(sortString('foos', 'of')) // 'oofs'
console.log(sortString('banana', 'abn')) // 'aaabnn'
