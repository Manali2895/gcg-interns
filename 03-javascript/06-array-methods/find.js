// Array.prototype.find()
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

const array1 = [5, 12, 5, 130, 44];

const found = array1.find(element => element > 10);

console.log("Original array:", array1);
console.log("First element greater than 10:", found);
