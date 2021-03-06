"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Check the exam
exports.__esModule = true;
exports.checkExam = void 0;
/*
Task:
-----
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/
function checkExam(array1, array2) {
    var score = 0;
    array1.forEach(function (e, i) {
        if (e === array2[i]) {
            score += 4;
        }
        else if (array2[i] === "") {
            score += 0;
        }
        else {
            score += -1;
        }
    });
    return score < 0 ? 0 : score;
}
exports.checkExam = checkExam;
// TEST CASES
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // 0)
// BEST SOLUTION
/*
export function checkExam(array1: string[], array2: string[]): number {
  let result = 0;
  
  array2.forEach((item, index) => {
    item === array1[index] ? result += 4 : item === '' ? result += 0 : result -= 1
  });
  
  return Math.max(result, 0);
}
*/
