// Given an array of strings, write a function that finds the longest 
// common prefix string amongst them. If there is no common prefix, return an empty string "".

// Input: ["flower", "flow", "flight"]
// Output: "fl"

// Input: ["dog", "racecar", "car"]
// Output: ""

// Use indexOf to determine if the current longestPrefix exists in the current word
// If it exists, we will get a value of 0 returned
  // For example, comparing flow to flow gives 0
// If it does not exist, we get a value of -1 returned
  // For example, comparing flowe to flow gives -1
// When it does not occur in the word we shorten the prefix and keep going through the while loop
  // If it does occur, we know the existing prefix is a match with that word so we can move onto the next word in the array

function longestCommonPrefix(arr) {
  if (arr.length === 0) return '';

  let longestPrefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(longestPrefix) !== 0) {
      longestPrefix = longestPrefix.slice(0, -1);
      if (longestPrefix === '') return '';
    }
  }

  return longestPrefix;
}

const input = ['flower', 'flow', 'flight'];
const anotherInput = ['dog', 'racecar', 'car']
const another = ['bear', 'beats', 'beasty', 'beastly']

console.log(longestCommonPrefix(anotherInput));