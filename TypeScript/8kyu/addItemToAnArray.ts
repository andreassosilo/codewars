// Codewars - Andreas Sosilo
// 8 kyu - TypeScript - Basic Training: Add item to an Array

/*
Task:
-----
Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

export const websites: string[] = [];
*/

import { websites } from './preloaded';
websites.push('codewars');

export { websites };
