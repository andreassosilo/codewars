// Codewars - Andreas Sosilo
// 6 kyu - Take a Ten Minute Walk

/*
Task:
-----
You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity
to go for a short walk. The city provides its citizens with a Walk Generating App on their
phones -- everytime you press the button it sends you an array of one-letter strings
representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single
block in a direction and you know it takes you one minute to traverse one city block, so
create a function that will return true if the walk the app gives you will take you exactly
ten minutes (you don't want to be early or late!) and will, of course, return you to your
starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction
letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a
walk, that's standing still!).
*/

function isValidWalk (walk) {
  // If it is not ten minutes walk, return false
  if (walk.length !== 10) return false
  // Create variable to count the horizontal and vertical movements
  let horizontal = 0
  let vertical = 0
  // Using for-loop count the movement coordinate
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      vertical++
    } else if (walk[i] === 's') {
      vertical--
    } else if (walk[i] === 'w') {
      horizontal--
    } else if (walk[i] === 'e') {
      horizontal++
    }
  }
  // Check if the coordinate return to the starting position
  return horizontal === 0 && vertical === 0
}

// TEST CASES
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) // 'should return true'
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n'])) // 'should return false'
