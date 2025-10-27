// Array.prototype.findIndex()
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 3;

console.log("Original array:", array1);
console.log("Index of first element greater than 13:", array1.findIndex(isLargeNumber));
