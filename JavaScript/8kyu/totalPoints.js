// Codewars
// 8 kyu - Total amount of points

/*
Task:
-----
Our football team finished the championship. The result of each match look
like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team
in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points (games) {
  let total = 0
  for (let i = 0; i < games.length; i++) {
    let x = parseInt(games[i][0])
    let y = parseInt(games[i][2])
    // console.log(x, y)
    if (x > y) {
      total += 3
    } else if (x === y) {
      total += 1
    }
  }
  return total
}

// TEST CASES
console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])) // 30
