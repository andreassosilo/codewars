// Codewars - Andreas Sosilo
// 8 kyu - Convert a Boolean to a String

/*
Task:
-----
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

export const booleanToString = (b: boolean): string => {
  return b.toString();
};

// TEST CASES
console.log(booleanToString(true)); // "true"
console.log(booleanToString(false)); // "false"
