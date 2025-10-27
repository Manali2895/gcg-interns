// Array.prototype.join()
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

const elements = ['Fire', 'Air', 'Water'];

console.log("Original array:", elements);

console.log("Joined with default separator:", elements.join());
// expected output: "Fire,Air,Water"

console.log("Joined with empty string:", elements.join(''));
// expected output: "FireAirWater"

console.log("Joined with '-':", elements.join('-'));
// expected output: "Fire-Air-Water"
