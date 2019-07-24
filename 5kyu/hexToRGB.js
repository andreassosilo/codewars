// Codewars - Andreas Sosilo
// 5 kyu - Convert A Hex String To RGB

/*
Task:
-----
When working with color values in JavaScript it can sometimes be useful to extract
the individual red, green, and blue (RGB) component values for a color. Implement a
hexStringToRGB() function that meets these requirements:

Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
Returns an object with the structure {r:255, g:153, b:51} where r, g, and b range from 0 through 255
Note, your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF").

Example
hexStringToRGB("#FF9933") // returns {r:255, g:153, b:51}
*/

function hexStringToRGB (hexString) {
  // Create object to accomodate the RGB result
  let result = { r: null, g: null, b: null }
  let counter = 1
  // Check if the first index of the string is '#' or not
  if (hexString[0] === '#') {
    // Do looping using for-in, for each key in the object 'result'
    for (let key in result) {
      // Get the hexString for each key and change it to RGB number
      let temp = hexString[counter] + hexString[counter + 1]
      // console.log(temp)
      // Assign the RGB number to each key in the result object
      result[key] = parseInt(temp, 16)
      counter += 2
    }
  } else { // Else return error message
    return `Input is not in RGB format`
  }
  return result
}

// BEST SOLUTION
// function hexStringToRGB (h) {
//   return {
//     r: parseInt(h.slice(1, 3), 16),
//     g: parseInt(h.slice(3, 5), 16),
//     b: parseInt(h.slice(5, 7), 16)
//   }
// }

// TEST CASES
console.log(hexStringToRGB('#FF9933')) // {r:255, g:153, b:51}
