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

// Declare a const categories to transform the input into the result
// Use the reduce method to loop through the array and build the categories array
// Remember that each category should be unique
// Each level within a category should be unique
// Each sublevel within a level should be unique
// Within reduce we will declare a category and initialize it with undefined
// 

const categories = input.reduce((acc, obj, index, original) => {
  let category;

  // See if category does not exist in the acc
  if (!acc.find((d) => d.category === obj.category)) {
    category = {
      category: obj.category,
      children: [],
    }

    


  
    acc.push(category)
  }

  return acc;
}, [])

console.log(JSON.stringify(categories, null, 2))