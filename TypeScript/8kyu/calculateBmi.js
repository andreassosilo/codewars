"use strict";
// Codewars - Andreas Sosilo
// 8 kyu - Calculate BMI
exports.__esModule = true;
exports.bmi = void 0;
/*
Task:
-----
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/
function bmi(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return bmi <= 18.5
        ? "Underweight"
        : bmi <= 25.0
            ? "Normal"
            : bmi <= 30.0
                ? "Overweight"
                : "Obese";
}
exports.bmi = bmi;
// TEST CASES
console.log(bmi(80, 1.8)); // "Normal"
