// Input: [1, [2, [3, 4], 5], 6]
// Output: [1, 2, 3, 4, 5, 6]

// Loop through the array
// Can use the map method to create a new array
// If the element is not an array, add it to the new array
// If the element is an array, recursively call the flatten function on it again
// 

const input = [1, [2, [3, 4], 5], 6];

function flatten(arr) {
  return arr.reduce((acc, el) => {
    if (!Array.isArray(el)) {
      return [...acc, el];
    } else {
      return [...acc, ...flatten(el)]
    }
  }, [])
};

console.log(flatten(input));