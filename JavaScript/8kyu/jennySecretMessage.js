// Codewars - Andreas Sosilo
// 8 kyu - Jenny's secret message

/*
Task:
-----
Jenny has written a function that returns a greeting for a user. However, she's in
love with Johnny, and would like to greet him slightly different. She added a special
case to her function, but she made a mistake.

Can you help her?
*/

function greet (name) {
  return (name === 'Johnny') ? `Hello, my love!` : `Hello, ${name}!`
}

// TEST CASES
console.log(greet('Simon')) // 'Hello, Simon!'
console.log(greet('Johnny')) // 'Hello, my love!'
