// Given a string, write a function that counts the frequency of each word in the string
// It should return an object where the keys are the words and the values are their counts
// Ignore case and punctuation

const input = "Hello world! Hello, everyone.";
// Expected output:
// {
//   hello: 2,
//   world: 1,
//   everyone: 1
// }

const lowercase = input.toLowerCase();
const words = lowercase.split(" ");

const wordsOnly = words.map((word) => {
  return word.replace(/[^a-z]/g, "");
});

const dictionary = wordsOnly.reduce((acc, word) => {
  if (word in acc) {
    acc[word] += 1;
  } else {
    acc[word] = 1;
  }

  return acc;
}, {});

console.log({ dictionary });
