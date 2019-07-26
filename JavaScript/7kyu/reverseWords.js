// Codewars
// 7 kyu - Reverse Words

/*
Task:
-----
Complete the function that accepts a string parameter, and reverses each word in
the string. All spaces in the string should be retained.
*/

function reverseWords (str) {
  // Split string by spaces into array
  let arr = str.split(' ')
  // Loop through the array, split each index into array, reverse and then join
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('')
  }
  // Join each array into one string
  arr = arr.join(' ')
  return arr
}

// TEST CASES
console.log(reverseWords('This is an example!')) // "sihT si na !elpmaxe"
console.log(reverseWords('double  spaces')) // "elbuod  secaps"
