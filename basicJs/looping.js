const birds = ['parrot', 'penguin', 'falcon'];

// for...of
// Access every item in an array using a for...of loop
for (const bird of birds) {
  console.log(bird)
}

// map
// Remember that map will leave you with a new array. It does not modify the existing array
const addStatementToBirds = birds.map((bird) => `I am a ${bird}`);

