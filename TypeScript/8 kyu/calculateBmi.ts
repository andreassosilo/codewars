// Codewars - Andreas Sosilo
// 8 kyu - Calculate BMI

/*
Task:
-----
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

export function bmi(weight: number, height: number): string {
  let bmi: number = weight / Math.pow(height, 2);
  return bmi <= 18.5
    ? "Underweight"
    : bmi <= 25.0
    ? "Normal"
    : bmi <= 30.0
    ? "Overweight"
    : "Obese";
}

// TEST CASES
console.log(bmi(80, 1.8)); // "Normal"
