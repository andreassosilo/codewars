// Codewars - Andreas Sosilo
// 6 kyu - IQ Test

/*
Task:
-----
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

export function iqTest(numbers: string): number {
  let numArr: number[] = numbers.split(" ").map((e) => parseInt(e));
  let odd: number[] = numArr.filter((e) => e % 2 === 1);
  let even: number[] = numArr.filter((e) => e % 2 === 0);
  return odd.length < even.length
    ? numArr.indexOf(odd[0]) + 1
    : numArr.indexOf(even[0]) + 1;
}

// TEST CASES
console.log(iqTest("2 4 7 8 10")); // 3
console.log(iqTest("1 2 1 1")); // 2

// BEST SOLUTION
/*
export function number(busStops: number[][]): number {
  return busStops.reduce((rem, [on, off]) => rem + (on - off), 0);
}
*/
