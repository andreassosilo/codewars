// Codewars - Andreas Sosilo
// 6 kyu - Sums of Parts

/*
Task:
-----
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]
*/

export function partsSums(ls: number[]): number[] {
  let sum: number = ls.reduce((acc, curr) => acc + curr, 0);
  let result: number[] = [sum];
  for (let i = 0; i < ls.length; i++) {
    sum -= ls[i];
    result.push(sum);
  }
  return result;
}
// TEST CASES
console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]

// BEST SOLUTION
