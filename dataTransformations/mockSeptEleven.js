// Create a function that does sort by local compare
// function sortByLocale(arr) {
//   arr.sort(())
// }

const data = [{
  name: 'A',
  value: 13.7,
  category: 'income'
},
{
  name: 'B',
  value: 14,
  category: 'outgoing'
},
{
  name: 'C',
  value: 15.3,
  category: 'income'
},
{
  name: 'D',
  value: 113,
  category: 'income'
},
{
  name: 'A',
  value: 45,
  category: 'outgoing'
},
{
  name: 'A',
  value: 72.3,
  category: 'income'
},
{
  name: 'C',
  value: 143,
  category: 'income'
},
{
  name: 'A',
  value: 4,
  category: 'outgoing'
},
{
  name: 'B',
  value: 201,
  category: 'income'
}
];

console.log(data.sort(sortByLocaleCompare('category')))

function sortByLocaleCompare(key) {
  return (a, b) => a[key].localeCompare(b[key]); 
}