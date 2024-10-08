// Given an array of strings, write a function that groups the strings by their first letter into an object
// The keys are the letters and the values are the strings that start with that letter

const input = ["apple", "banana", "apricot", "blueberry", "cherry"];
// Expected output:
const output = {
  a: ["apple", "apricot"],
  b: ["banana", "blueberry"],
  c: ["cherry"],
};

const result = input.reduce((acc, word) => {
  const firstLetter = word[0];

  if (acc[firstLetter]) {
    acc[firstLetter].push(word);
  } else {
    acc[firstLetter] = [word];
  }

  return acc;
}, {});

console.log({ result });
