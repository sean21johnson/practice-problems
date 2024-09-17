// Given a comma-separated string of words, write a function that transforms this string into an array of words. After transforming it, return the array in alphabetical order.

// If you wanted to return it in z to a order
const strToArrDescending = (str) => str.split(',').sort((a, b) => a.localeCompare(b));

// By default, this will sort the list alphabetically
const strToArrAscending = (str) => str.split(',').sort();

// Using the (a, b) => a - b arguments for sort is used for numeric sorting
// a - b is ascending
// b - a is descending