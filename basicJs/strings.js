// .split
// Take a string and call .split with an argument. The argument is where you want to split the string
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(',')
// An empty string passed in as an argument will just split every character in the string
const word = 'sean';
const letters = word.split('')

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