// Codewars - Andreas Sosilo
// 7 kyu - Separate basic types

/*
Task:
-----
Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}
*/

function separateTypes(input) {
  let result: object = {};
  input.forEach((e) => {
    switch (typeof e) {
      case "number":
        if (!result["number"]) result["number"] = [];
        result["number"].push(e);
        break;
      case "string":
        if (!result["string"]) result["string"] = [];
        result["string"].push(e);
        break;
      case "boolean":
        if (!result["boolean"]) result["boolean"] = [];
        result["boolean"].push(e);
        break;
    }
  });
  return result;
}

// TEST CASES
console.log(separateTypes(["a", 1, 2, false, "b"])); // {number: [1, 2],  string: ['a', 'b'], boolean: [false]}
console.log(separateTypes(["a", 1, 2])); // {number: [1, 2],  string: ['a']}

// BEST SOLUTION
/*
function separateTypes(input) {
  return input.reduce((types, value) => {
    const valueType = typeof value
    const type = types[valueType]
    types[valueType] = type ? [...type, value] : [value]
    return types
  }, {})
}
*/
