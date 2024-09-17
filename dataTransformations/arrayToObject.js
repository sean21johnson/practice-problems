// Given an array of strings, write a function that transforms this array into an object. The keys of the object should be the strings from the array, and the values should be the lengths of those strings.

// Input: ["apple", "banana", "grape"]
// Output: { "apple": 5, "banana": 6, "grape": 5 }

// Loop through the array and build the object at each iteration
// key should be set as the element
// value should be set as the length of the element

// Looping technique
const arrToObj = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i].length;
  }

  return obj;
}

// Using the reduce method instead
const arrToObjWithReduce = (arr) => {
  return arr.reduce((acc, curr) => {
    acc[curr] = curr.length;
    return acc;
  }, {})
}

// With build-in obj method and arr method
const arrToObjWithBuiltIns = (arr) => {
  return Object.fromEntries(arr.map(item => [item, item.length]));
};

const myArr = ["apple", "banana", "grape"];

console.log(arrToObjWithBuiltIns(myArr));