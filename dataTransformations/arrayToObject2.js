// Given an array of objects, where each object has a key and a value property, write a function that transforms this array into a single object. The keys of the resulting object should be the values from the key properties of the input objects, and the values should be the corresponding value properties.

// Input: [
//   { key: 'apple', value: 5 },
//   { key: 'banana', value: 2 },
//   { key: 'grape', value: 4 }
// ]

// Output: {
//   apple: 5,
//   banana: 2,
//   grape: 4
// }

// Loop through the array
// Use reduce an build a new object
function convertToObj(arr) {
  const result = arr.reduce((acc, obj) => {
    const values = Object.values(obj);
    acc[values[0]] = values[1];
    return acc;
  }, {})

  return result;
}

const convertToObjArrow = (arr) => 
  arr.reduce((acc, obj) => {
    const values = Object.values(obj);
    acc[values[0]] = values[1];
    return acc;
  }, {})

// Destructure the object to use the key and value directly
// Wrap the object being returned in the reduce callback in () to leverage the arrow functionality and not need to use the return keyword
// Spread ...acc so that the accumulator is being updated immutably
const convertToObjRefined = (arr) => 
    arr.reduce((acc, { key, value }) => ({
      ...acc,
      [key]: value
    }), {});

const input = [
  { key: 'apple', value: 5, }, 
  { key: 'banana', value: 2, }, 
  { key: 'grape', value: 4 }
]

console.log(convertToObjArrow(input));