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
  // complete this function
  let result = ''
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < 0) {
      arguments[i] = 0
    } else if (arguments[i] > 255) {
      arguments[i] = 255
    }
    let hexString = arguments[i].toString(16).toUpperCase()
    // console.log('before:' + hexString)
    hexString = ('0' + hexString).slice(-2)
    // console.log('after:' + hexString)
    result += hexString
  }
  return result
}

// TEST CASES
console.log(rgb(0, 0, 0)) // '000000'
console.log(rgb(0, 0, -20)) // '000000'
console.log(rgb(300, 255, 255)) // 'FFFFFF'
