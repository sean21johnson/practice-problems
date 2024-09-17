// Map
// Given an array of numbers, return a new array where each number is doubled
const original = [14, -4, 1, 2, 3, 4, 5, 6, 7];
const doubled = original.map((num) => num * 2);

// Filter
// Given an array of numbers, return a new array with only even numbers
const evens = original.filter((a) => a % 2 === 0);

// Reduce
// Given an array of numbers, return the sum of all the numbers in the array
const sum = original.reduce((acc, num) => (acc + num), 0);

// Find
// Given an array of strings, find and return the first string that contains the letter 'a'
const words = ['cat', 'dog', 'fish', 'elephant'];
const firstA = words.find((w) => w.split('').includes('a'));

// Some
// Given an array of numbers, determine if any of the numbers are greater than 10
const hasNumGreaterThanTen = original.some((n) => n > 10);

// Every
// Given an array of numbers, determine if all of the numbers are positive
const areAllPositive = original.every((n) => n > 0);

// Sort
// Given an array of numbers, sort them in descending order
const descendingOrder = original.sort((a, b) => b - a);

// Sort
// Given an arry of number, sort them in ascending order
const ascendingOrder = original.sort((a, b) => a - b);

// forEach
// Given an array of words, log each of them to the console in all caps
// words.forEach((w) => {
//   console.log(w.toUpperCase());
// })

// Includes
// Check if the nums array includes the number 7
const includesSeven = original.includes(7);

// concat
// Given two arrays, merge them into a single array
const merged = original.concat(words);

console.log({merged})
