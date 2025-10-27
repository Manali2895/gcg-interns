// Array.prototype.push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];

console.log("Original array:", animals);

const count = animals.push('cows');
console.log("New length:", count);
console.log("Array after push:", animals);

animals.push('chickens', 'cats', 'dogs');
console.log("Array after pushing multiple elements:", animals);
