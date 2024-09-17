const input = [
  { category: 'A', level: 'Aa', sublevel: 'Aaa' },
  { category: 'A', level: 'Aa', sublevel: 'Aab' },
  { category: 'A', level: 'Ab', sublevel: 'Abb' },
  { category: 'B', level: 'Ac', sublevel: 'Abc' }
];

const result = [
  {
    category: 'A',
    children: [
      {
        level: 'Aa',
        children: [
          {
            sublevel: 'Aaa'
          },
          {
            sublevel: 'Aab'
          }
        ]
      },
      {
        level: 'Ab',
        children: [
          {
            sublevel: 'Abb'
          }
        ]
      }
    ]
  },
  {
    category: 'B',
    children: [
      {
        level: 'Ac',
        children: [
          {
            sublevel: 'Abc'
          }]
      }]
  }];

// Use the array reduce method to go from the arr to the result
// Organize the result into two categories based on that property in the input array
// Children property should be an array of objects with levels and sublevels

const categories = input.reduce((acc, obj, index, original) => {
  let category;

  // If the category does not exist in the accumulator, create a new one
  if (!acc.find((data) => data.category === obj.category)) {
    category = {
      category: obj.category,
      children: []
    }

    // Filter for only the category we're currently looking at
    // Filter the original input for only the category we're currently looking at
    // Iterate over the filtered array with a forEach loop
    // If the level does not exist in the children array...
    // ...create a new object with the level and empty children array
    original.filter((d) => d.category === obj.category).forEach((d) => {
      if (!category.children.find((c) => c.level === d.level)) {
        category.children.push({
          level: d.level,
          children: [],
        });
      }

      // Find the level in the children array
      const level = category.children.find((c) => c.level === d.level);

      // If the sublevel does not yet exist in the children array...
      // ...create a new object with the sublevel
      if (!level.children.find(c => c.sublevel === d.sublevel)) {
        level.children.push({
          sublevel: d.sublevel,
        })
      }
    })
    
    // Push the category to the accumulator
    acc.push(category)
  } 


  return acc;
}, [])

console.log(JSON.stringify(categories, null, 2))