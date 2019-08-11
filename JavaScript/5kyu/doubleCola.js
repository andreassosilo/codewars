// Codewars - Andreas Sosilo
// 5 kyu - Double Cola

/*
Task:
-----
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink
vending machine; there are no other people in the queue. The first one in the queue
(Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end
of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to
the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Write a program that will return the name of the person who will drink the n-th cola.

Input
The input data consist of an array which contains at least 1 name, and single integer n
which may go as high as the biggest number your language of choice supports (if there's
such limit, of course).

Output / Examples
Return the single line — the name of the person who drinks the n-th can of cola. The cans
are numbered starting from 1.

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"
*/

function whoIsNext (names, r) {
  // Declare variable flag for starting and stopping the while function
  let flag = true
  // Declare variable length for store the length of array each loops
  let length = names.length
  // Declare variable approach for store the amount of names approaching each loops
  let approach = 1
  // Declare variable rangeStart for store the first index of each loops
  let rangeStart = 1
  // Declare variable rangeEnd for store the last index of each loops
  let rangeEnd = names.length
  // Do looping while the rangeEnd is smaller than the requested queue number
  while (flag) {
    // If the last index of current array length is greater than the requested queue number, set the flag false to quit looping
    if (rangeEnd >= r) {
      flag = false
    } else { // Calculate the length, approach times by 2 and change the rangeStart and rangeEnd with the current round of looping
      length = length * 2
      approach = approach * 2
      rangeStart = rangeEnd + 1
      rangeEnd = rangeEnd + length
    }
  }
  // If the queue number - rangeStart is 0 then it is the first name of array
  // Else calculate the index with (queue number - rangeStart) / approach
  return ((r - rangeStart) === 0) ? names[0] : names[Math.floor((r - rangeStart) / approach)]
}

// TEST CASES
let names = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']
console.log(whoIsNext(names, 1)) // 'Sheldon'
console.log(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 52)) // 'Penny'
