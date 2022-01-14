// Codewars - Andreas Sosilo
// 8 kyu - How good are you really?

/*
Task:
-----
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  const avgScore = classPoints.reduce((acc, curr) => (acc += curr));
  return yourPoints > (yourPoints + avgScore) / (classPoints.length + 1);
}

// TEST CASES
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // 75
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)); // 69

// BEST SOLUTION
/*
export function betterThanAverage(classPoints: number[], yourPoints: number) {
  const average = classPoints.concat(yourPoints).reduce((prev, curr) => prev + curr) / (classPoints.length + 1);
  return yourPoints > average;
}
*/
