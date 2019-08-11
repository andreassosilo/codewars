// Codewars - Andreas Sosilo
// 3 kyu - Battleship field validator

/*
Task:
-----
Write a method that takes a field for well-known board game "Battleship" as an argument
and returns true if it has a valid disposition of ships, false otherwise. Argument is
guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the
cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player
has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by
targetting individual cells on his field. The ship occupies one or more cells in the grid.
Size and number of ships may differ from version to version. In this kata we will use
Soviet/Russian version of the game.

Before the game begins, players set up the board and place the ships accordingly to the
following rules:

There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2)
and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.

Each ship must be a straight line, except for submarines, which are just single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.
 */

function validateBattlefield (field) {
  // Create reference of the fleet ship's type
  const fleet = [
    { ship: 'Battleship', size: 4, number: 1 },
    { ship: 'Cruiser', size: 3, number: 2 },
    { ship: 'Destroyer', size: 2, number: 3 },
    { ship: 'Submarines', size: 1, number: 4 }
  ]

  // First, check if in the battlefield there are 20 cells with '1'
  let shipsCellCounter = 0
  // Check total ships that should be in the board
  let numberOfShips = 0
  for (let i = 0; i < fleet.length; i++) {
    shipsCellCounter += fleet[i].number * fleet[i].size
    numberOfShips += fleet[i].number
  }
  if (!checkBoardValidity(field, shipsCellCounter)) return false

  // Now, you need to verify that you have exactly the correct number of each
  // type of ship, and that ships do not touch. You can do this through
  // connected component analysis.

  // This will give you the size, location and shape of each "blob" in your field.
  // https://en.wikipedia.org/wiki/Connected-component_labeling

  // One component at a time
  let component = []
  let queue = []
  let components = null

  const size = field.length

  let visited = []
  for (let i = 0; i < size; i++) {
    visited.push([])
    for (let j = 0; j < size; j++) {
      visited[i].push(false)
    }
  }

  let generateNeighbors = (r, c) => {
    let offsets = [ [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1] ]
    return offsets.reduce((acc, offset) => {
      let neighborR = r + offset[0]
      let neighborC = c + offset[1]
      if (neighborR >= 0 && neighborR < size && neighborC >= 0 && neighborC < size) {
        acc.push({ r: neighborR, c: neighborC })
      }
      return acc
    }, [])
  }

  let hasCorrectNumShip = (components, size, expectedNumShip) => {
    return components.filter((c) => { return c.length === size })
      .length === expectedNumShip
  }

  // key is label, value is an array of 2d points
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      queue.push({ r: i, c: j })
      components = []
      while (queue.length > 0) {
        let { r, c } = queue.shift()
        if (field[r][c] === 1 && !visited[r][c]) {
          visited[r][c] = true
          components.push({ r, c })
          // find neighbors and push to queue to explore
          queue = queue.concat(generateNeighbors(r, c))
        }
      }
      if (components.length > 0) { component.push(components) }
    }
  }

  let wrongShape = component.some((c) => { return hasOverlapOrContact(c) })
  if (!wrongShape) {
    // Finally, check that you have the correct number of each ship type.
    // If you don't, then the field is invalid. If you do, the field is valid,
    // and you're done.

    // check if single battleship (size of 4 cells)
    // check for 2 cruisers (size of 3 cells)
    // check for 3 destroyers (size of 2 cells)
    // check for 4 submarines (size of 1 cell)
    return hasCorrectNumShip(component, 4, 1) &&
            hasCorrectNumShip(component, 3, 2) &&
            hasCorrectNumShip(component, 2, 3) &&
            hasCorrectNumShip(component, 1, 4)
  }
  return false
}

function checkBoardValidity (field, shipsCellCounter) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) shipsCellCounter--
    }
  }
  return shipsCellCounter === 0
}

function hasOverlapOrContact (components) {
  // is vertical or horizontal
  return !(components.every((p) => { return p.r === components[0].r }) ||
    components.every((p) => { return p.c === components[0].c }))
}

// TEST CASES
console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ])
)
