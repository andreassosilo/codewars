'use strict';
// Codewars - Andreas Sosilo
// 8 kyu - Get Planet Name By ID

/*
Task:
-----
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
*/

// SOLUTION
const getPlanetName = (id) => {
  let name = '';
  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
  return name;
};

// TEST CASES
console.log(getPlanetName(2)); // 'Venus'
console.log(getPlanetName(5)); // 'Jupiter'

// BEST SOLUTION
// const getPlanetName = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id-1];
