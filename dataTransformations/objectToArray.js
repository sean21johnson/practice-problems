// Input: { apple: 5, banana: 2, grape: 4 }
// Output: ["apple: 5", "grape: 4", "banana: 2"]


// Use object.entries() to get an array of arrays of the key-value pairs
// Sort the entries based on the 2nd element in each of the arrays
// Map over the array to create a new array in the format above
const objToArr = (obj) => 
  Object.entries(obj).sort((a, b) => b[1] - a[1]).map((entry) => `${entry[0]}: ${entry[1]}`);

const myObj = {
  apple: 5,
  banana: 2,
  grape: 4
}

console.log(objToArr(myObj));