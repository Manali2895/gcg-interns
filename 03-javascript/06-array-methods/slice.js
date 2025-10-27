// Array.prototype.slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log("Original array:", animals);

console.log("Slice from index 2:", animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log("Slice from index 2 to 4:", animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log("Slice from index 1 to 5:", animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
