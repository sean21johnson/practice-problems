// Given an array of strings, write a function that groups the strings that are anagrams of each other. 
// Two strings are anagrams if they contain the same characters in the same frequencies, but in different orders.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Create an empty object
// Loop through the strings in the array
// Manipulate each string you encounter so that it's sorted alphabetically
// Use this as the key for the map
  // If it does not exist, set a new key and initialize to an empty array. Push the string (not the key) onto the array
  // If it already exists, push the string (not the key) onto the array
// When you exit the loop, you will have a map where the keys are essentially the anagram letters and the values are the list of strings
// Use Object.values which will give you an array of all the values you have in your object
function groupAnagrams(strs) {
  const map = {};

  for (const str of strs) {
    const key = str.split('').sort().join('');
    
    if (!map[key]) {
      map[key] = [];
    }
    
    map[key].push(str);
  }

  return Object.values(map);
}

console.log(groupAnagrams(arr));