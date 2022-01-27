// Codewars - Andreas Sosilo
// 7 kyu - TypeScript - Point in a unit circle

/*
Task:
-----
Write a function that returns true if a given point (x,y) is inside of a unit circle (that is, a "normal" circle with a radius of one) centered at the origin (0,0) and returns false if the point is outside.

Input
x: The first coordinate of the given point.
y: The second coordinate of the given point.
Notes
The region bounded by the circle is considered to be an open disk, so points on the boundary of the circle should return false.
We are using the euclidean metric.
*/

export function pointInCircle(x: number, y: number): boolean {
  return Math.sqrt(x * x + y * y) < 1;
}

// TEST CASES
console.log(pointInCircle(0, 0.9)); // true
console.log(pointInCircle(0, -1)); // false

// BEST SOLUTION
// export const pointInCircle = (x: number, y: number): boolean => !~~Math.hypot(x, y);
