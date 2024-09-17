// Given an array of objects representing products in a store
// Filter the products that are out of stock
// Sort the filtered products by price in ascending order
// Create a new array of strings where each string looks like this "Product Name: $Price"

const products = [
  { name: 'MacBook Pro', category: 'Laptops', price: 2500, inStock: true },
  { name: 'Dell XPS', category: 'Laptops', price: 1500, inStock: false },
  { name: 'iPhone 13', category: 'Phones', price: 999, inStock: true },
  { name: 'Samsung Galaxy S21', category: 'Phones', price: 799, inStock: true },
  { name: 'Dyson V11', category: 'Home Appliances', price: 600, inStock: false },
  { name: 'Shark Navigator', category: 'Home Appliances', price: 200, inStock: true }
];

const output = [
  'Shark Navigator: $200',
  'Samsung Galaxy S21: $799',
  'iPhone 13: $999',
  'MacBook Pro: $2500'
];

// Use the filter method on the products array to exclude any products that are out of stock
// Sort the products by price in ascending order
// Map over the resulting array to create the desired string of product: price

const result = products.filter((d) => d.inStock).sort((a, b) => a.price - b.price).map((d) => `${d.name}: $${String(d.price)}`)

console.log({result})
