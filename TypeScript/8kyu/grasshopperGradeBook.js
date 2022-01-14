"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Grasshopper-Grade Book
exports.__esModule = true;
exports.getGrade = void 0;
/*
Task:
-----
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
function getGrade(a, b, c) {
    var average = (a + b + c) / 3;
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
exports.getGrade = getGrade;
// TEST CASES
console.log(getGrade(70, 70, 100)); // 'B'
console.log(getGrade(95, 90, 93)); // 'A'
// BEST SOLUTION
/*
export function getGrade(a: number, b: number, c: number) {
  let avg = (a + b + c) / 3;
  return avg < 60
    ? "F"
    : avg < 70
    ? "D"
    : avg < 80
    ? "C"
    : avg < 90
    ? "B"
    : "A";
}
*/
