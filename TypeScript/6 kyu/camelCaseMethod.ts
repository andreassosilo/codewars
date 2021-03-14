// Codewars - Andreas Sosilo
// 6 kyu - CamelCase Method

/*
Task:
-----
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

camelCase("hello case"); // => "HelloCase"
camelCase("camel case word"); // => "CamelCaseWord"
Don't forget to rate this kata! Thanks :)
*/

export function camelCase(str: string): string {
  return str
    .split(' ')
    .map((e) => (e ? e[0].toUpperCase() + e.substring(1) : ''))
    .join('');
}

// TEST CASES
console.log(camelCase('')); // ""
console.log(camelCase(' camel case word')); // "CamelCaseWord"

// BEST SOLUTION
/*
export function camelCase(str: string): string {
  return str.replace(/\b\w/g, str => str.toUpperCase()).split(' ').join('');
}
*/
