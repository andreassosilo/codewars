// Codewars
// 6 kyu - ThetaFormulation

/*
Task:
-----
There were days in math class when I wished I had a simple way to quickly solve
for any given variable in a formula and check my answers accordingly. If only I
had a time machine...

Oh well! Anyhow, using the following formula:
Angle (in Radians) === Arc length / Radius length

Write a function thetaFormula:

When given two of the values and "?" returns the number value of the missing one.
When given all three values returns a boolean value verifying if the statement is true or false.
When given one or no values as arguments or invalid arguments returns null.

If the returned value contains more than three numbers after the decimal it should be fixed
to three decimal places. The function should be able to return negative values, they will
be tested for.
*/

function thetaFormula (radius, arc, angle) {
  if (typeof radius === 'number' && typeof arc === 'number' && typeof angle === 'number') {
    return radius === arc / angle
  }

  if (radius === undefined || arc === undefined || angle === undefined) {
    return null
  }

  if (radius === '?' && typeof arc === 'number' && typeof angle === 'number') {
    radius = arc / angle
    radius = countDecimals(radius) > 3 ? radius.toFixed(3) : radius
    return Number(radius)
  } else if (arc === '?' && typeof radius === 'number' && typeof angle === 'number') {
    arc = angle * radius
    arc = countDecimals(arc) > 3 ? arc.toFixed(3) : arc
    return Number(arc)
  } else if (angle === '?' && typeof arc === 'number' && typeof radius === 'number') {
    angle = arc / radius
    angle = countDecimals(angle) > 3 ? angle.toFixed(3) : angle
    return Number(angle)
  } else {
    return null
  }
}

function countDecimals (value) {
  if (Math.floor(value) === value) return 0
  return value.toString().split('.')[1].length || 0
}

// TEST CASES
console.log(thetaFormula(3, 1)) // null
console.log(thetaFormula('?', '?', '?')) // null
console.log(thetaFormula(92, 6, '?')) // 0.065
console.log(thetaFormula(26, '?', 4)) // 104
console.log(thetaFormula('?', 40, 10)) // 4
console.log(thetaFormula(-4, 4, -4)) // false
