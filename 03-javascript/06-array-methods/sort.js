// Array.prototype.sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log("Original array:", months);
months.sort();
console.log("Sorted array:", months);

const array1 = [1, 30, 4, 21, 100000];
console.log("Original array:", array1);
array1.sort();
console.log("Sorted array (lexicographically):", array1);

// To sort numerically, a compare function is needed
array1.sort((a, b) => a - b);
console.log("Sorted array (numerically):", array1);
