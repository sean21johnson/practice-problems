// Map
// The map method maps over each element in the array with a callback function to product a new array
const original = [14, -4, 1, 2, 3, 4, 5, 6, 7];
const doubled = original.map((num) => num * 2);

// .filter
// The filter method goes over each element in the array with a callback function to produce a new array that meets the criteria
const evens = original.filter((a) => a % 2 === 0);

// .reduce
// The reduce method goes over each element in the array with a callback function and produces an accumulated result
// Remember that the 2nd argument is what we initialize the "acc" to
const sum = original.reduce((acc, num) => (acc + num), 0);

// .find
// The find method goes over elements in the array with a callback function until it finds a match. It will return the element that matched.
// If no match is found, undefined is returned
const words = ['cat', 'dog', 'fish', 'elephant'];
const firstA = words.find((w) => w.split('').includes('a'));

// .some
// The find method goes over elements in the array with a callback function to check if any elements meet the condition. If any element does, it returns true
// If no elements meet the condition, it returns false
const hasNumGreaterThanTen = original.some((n) => n > 10);

// .every
// The every method goes over all elements in the array with a callback function to determine if they all match a condition. If they do, it returns true
// If any of the elements do not match the condition, it returns false
const areAllPositive = original.every((n) => n > 0);

// .sort
// The sort method sorts the elements of an array in place using a callback function. It returns the reference to the same array, now sorted.
const descendingOrder = original.sort((a, b) => b - a);
const ascendingOrder = original.sort((a, b) => a - b);

// .forEach
// Given an array of words, log each of them to the console in all caps
const uppercase = words.forEach((w) => {
  w.toUpperCase();
});

// .includes
// Loops over all elements of the array and determines if any of the elements match the argument passed in. Returns true if so. Otherwise, returns false.
const includesSeven = original.includes(7);

// .concat
// Given two arrays, merge them into a single array
const merged = original.concat(words);

// Spread
// Alernatively to using concat, we can use the spread method
const mergedWithSpread = [...original, ...words];

// .indexOf
// Call indexOf on an array and pass in an argument. The method will loop through the array and find the first index of the element in the array and return the index.
// If the element does not exist in the array, it will return -1
const sevenIndex = original.indexOf(7);

// .push
// Call the push method on an array and pass in an element as an argument that you'd like added to the end of the array
original.push(85);

// .unshift
// Call the unshift method on an array and pass in an element as an argument that you'd like added to the beginning of the array
original.unshift(-100);

// .pop
// Call the pop method on an array. It will remove the last element from the array and return it.
const removedLastElement = original.pop();

// .shift
// Call the shift method on an array. It will remove the first element from the array and return it.
const removedFirstElement = original.shift();

// .splice
// Call the splice method to change the contents of an existing array. Modifies the array in place
// The first argument indicates where to begin removing elements
// The 2nd argument indicates how many elements after and including the index passed in to remove
// The 3rd, 4th, ...nth argument adds new elements in
const names = ['sean', 'david', 'johnson'];
// Add anthony after sean, but don't delete any names from the array
names.splice(1, 0, 'anthony');
// Remove david from the array
names.splice(2, 1);
// Remove all names but sean from the array
names.splice(1);

// .join
// Call the join method on an array and pass in an argument of how you want to "connect" the elements to form a string
const newNames = ['sean', 'david', 'johnson'];
// Note the space in between the quotes below
const fullName = newNames.join(' ');
// Call with an empty string for there to be no separator character
const oneWordName = newNames.join('');

// .toString()
// Call the toString() method on an array and it will return a string with the elements separated by commas
const anotherName = ['maura', 'bradley', 'johnson'];
const nameWithCommas = anotherName.toString();

console.log({nameWithCommas})


