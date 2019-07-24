// Codewars - Andreas Sosilo
// 4 kyu - Next bigger number with the same digits

/*
Task:
-----
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/

/*
CONCEPT:
========
513 -> 51 3 -> 53 1 ->531
34453 -> 344 53 -> 345 43 -> 345 34 -> 34534

 [3,4,2,5,3]

 [3,4,2] [5,3] --> sort

 [3,4,2] [3,5]

 [3,4,5] [3,4]
 [3,4,5] [3,4]
 +[3,4,5].concat[3,4]
cari digit yang lebih gede dari array kiri indeks terakhir, tapi paling kecil di array kanan
 */

function nextBigger (n) {
    let str = n.split('')

  // Find the next bigger value to the right
  if ()
}

// TEST CASES
console.log(nextBigger(12)) // 21
console.log(nextBigger(2017)) // 2071
