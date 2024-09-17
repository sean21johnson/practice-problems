// Given a string, write a function that sorts the characters in the string by their frequency in descending order. 
// If two characters have the same frequency, they should appear in the order they first appeared in the string.

// Input: "tree"
// Output: "eetr" or "eert"

// Input: "cccaaa"
// Output: "aaaccc" or "cccaaa"

// Input: "Aabb"
// Output: "bbAa" or "bbaA"

// Loop through all of the characters in the string 
// Create an object with the character as the key and the number of appearances as the value
/*
  Input: 'tree'
  dictionary = {
    't': 1,
    'r': 1,
    'e': 2
  }


*/
function characterFrequencySort(str) {
  const dictionary = {};
  const firstOccurrence = {};

  // Count the frequency of each character and track their first occurrence
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    dictionary[character] = (dictionary[character] || 0) + 1;

    if (firstOccurrence[character] === undefined) {
      firstOccurrence[character] = i;
    }
  }

  // Sort entries by frequency, then by first occurrence index
  const sortedEntries = Object.entries(dictionary).sort((a, b) => {
    if (b[1] === a[1]) {
      return firstOccurrence[a[0]] - firstOccurrence[b[0]];
    }
    return b[1] - a[1];
  });

  // Construct the result string by repeating characters
  return sortedEntries.map(([char, freq]) => char.repeat(freq)).join('');
}

console.log(characterFrequencySort('tree'))