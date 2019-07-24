// Codewars - Andreas Sosilo
// 5 kyu - RGB To Hex Conversion

/*
Task:
-----
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb (r, g, b) {
  // Create new variable to save the end result
  let result = ''
  for (let i = 0; i < arguments.length; i++) {
    // If value is less than 0, set the value to 0
    if (arguments[i] < 0) {
      arguments[i] = 0
    } else if (arguments[i] > 255) { // If value is more than 255, set the value to 255
      arguments[i] = 255
    }
    // Change the value to hexadecimal string with base 16
    let hexString = arguments[i].toString(16).toUpperCase()
    // console.log('before:' + hexString)
    hexString = ('0' + hexString).slice(-2)
    // console.log('after:' + hexString)
    result += hexString
  }
  return result
}

// BEST SOLUTION
// function rgb (r, g, b) {
//   return toHex(r) + toHex(g) + toHex(b)
// }

// function toHex (d) {
//   if (d < 0) { return '00'; }
//   if (d > 255) { return 'FF'; }
//   return ('0' + (Number(d).toString(16))).slice(-2).toUpperCase()
// }

// TEST CASES
console.log(rgb(0, 0, 0)) // '000000'
console.log(rgb(0, 0, -20)) // '000000'
console.log(rgb(300, 255, 255)) // 'FFFFFF'
