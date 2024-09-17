// Given an array of integers where each integer appears either once or twice, write a function to find all the elements that appear twice. You should return the result as an array.
// You must solve the problem without using extra space (i.e., O(1) additional space complexity), and your algorithm should run in O(n) time.

// Input: [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Input: [1,2,3,4,4,5,6,7,7,8]
// Output: [4,7]

// The key here is that we cannot create an additional frequency object to determine how many times an element has been seen
// We can instead use an indexing approach with absolute values and a "mark" aka changing an element to a negative value

function findDupes(arr) {
  const result = [];

  // Loop through the array of numbers
  for (let i = 0; i < arr.length; i++) {
    // Find the place in the array to "mark"
    // Do this by taking the absolute value of the element and then substracting 1 to find its index because of 0-based indexing
    // Check if the value at that index is negative
      // If it is, it's been seen before, push it on the results array
      // If it is not, flip that value to a negative so that we can later check to see if there is a match
    const index = Math.abs(arr[i]) - 1;

    if (arr[index] < 0) {
      result.push(Math.abs(arr[i]));
    } else {
      arr[index] = -arr[index];
    }
  }

  return result;
}


const input = [4,3,2,7,8,2,3,1];

console.log(findDupes(input));