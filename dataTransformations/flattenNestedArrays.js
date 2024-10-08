// Write a function that takes a nested array and flattens it into a single-level array
// Do this without using the build-in .flat method

const input = [1, [2, 3], [4, [5, 6]]];
// Expected output: [1, 2, 3, 4, 5, 6]

const flatten = (data) => {
  const output = [];

  for (let el of data) {
    console.log({ el, output });
    if (Array.isArray(el)) {
      output.push(...flatten(el));
    } else {
      output.push(el);
    }
  }

  return output;
};

console.log(flatten(input));
