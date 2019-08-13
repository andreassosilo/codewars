'use strict'
// Codewars - Andreas Sosilo
// 6 kyu - The Supermarket Queue

/*
Task:
-----
There is a queue for the self-checkout tills at the supermarket. Your task is write a
function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents
a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task
correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
*/

function queueTime (customers, n) {
  // Create an array to save the time in each register
  const registerQueue = []
  for (let i = 0; i < n; i++) {
    registerQueue.push(0)
  }
  // Using for-loop to add the time into each register. Sort ascending, and fill the time.
  for (let j = 0; j < customers.length; j++) {
    registerQueue[0] += customers[j]
    registerQueue.sort((val1, val2) => val1 - val2)
  }
  return registerQueue[registerQueue.length - 1]
}

// TEST CASES
console.log(queueTime([], 1)) // 0
console.log(queueTime([1, 2, 3, 4], 1)) // 10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)) // 9
console.log(queueTime([10, 2, 3, 3], 2)) // 10
