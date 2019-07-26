// Codewars - Andreas Sosilo
// 6 kyu - Who likes it?

/*
Task:
-----
You probably know the "like" system from Facebook and other pages. People can
"like" blog posts, pictures or other items. We want to create the text that should
be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array,
containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
*/

function likes (names) {
  // Create a variable to accomodate the input array length
  let len = names.length
  // Using if-else conditional to check the length
  if (len === 0) {
    return 'no one likes this'
  } else if (len === 1) {
    return `${names[0]} likes this`
  } else if (len === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (len === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (len > 3) {
    let other = len - 2
    return `${names[0]}, ${names[1]} and ${other} others like this`
  }
}

// TEST CASES
console.log(likes([])) // 'no one likes this'
console.log(likes(['Peter'])) // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])) // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])) // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) // 'Alex, Jacob and 2 others like this'
