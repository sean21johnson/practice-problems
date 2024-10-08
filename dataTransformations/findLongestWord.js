// Given a string, write a function to find the longest word in the string
// If there are multiple words with the same length, return the first one found.
// Ignore punctuation and case-insensitivity

const input = "The quick brown fox jumped over the lazy dog!";
// Expected output: "jumped"

function findLongestWord(data) {
  const sanitizedData = data
    .split(" ")
    .map((word) => word.toLowerCase().replace(/[^a-z]/g, ""));

  return sanitizedData.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, "");
}

console.log(findLongestWord(input));
