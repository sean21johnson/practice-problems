// Given an array of objects representing a store
// Each product contains info about its category, subcategory, product details, and stock status
// Group the products by category, then by subcategory and filter out products that are out of stock

const input = [
  { category: 'Electronics', subcategory: 'Laptops', productDetails: { productId: 1, name: 'MacBook Pro', price: 2500 }, inStock: true },
  { category: 'Electronics', subcategory: 'Laptops', productDetails: { productId: 2, name: 'Dell XPS', price: 1500 }, inStock: false },
  { category: 'Electronics', subcategory: 'Phones', productDetails: { productId: 3, name: 'iPhone 13', price: 999 }, inStock: true },
  { category: 'Electronics', subcategory: 'Phones', productDetails: { productId: 4, name: 'Samsung Galaxy S21', price: 799 }, inStock: true },
  { category: 'Home Appliances', subcategory: 'Vacuums', productDetails: { productId: 5, name: 'Dyson V11', price: 600 }, inStock: false },
  { category: 'Home Appliances', subcategory: 'Vacuums', productDetails: { productId: 6, name: 'Shark Navigator', price: 200 }, inStock: true },
  { category: 'Furniture', subcategory: 'Chairs', productDetails: { productId: 7, name: 'Ergonomic Chair', price: 300 }, inStock: true },
  { category: 'Furniture', subcategory: 'Chairs', productDetails: { productId: 8, name: 'Dining Chair', price: 150 }, inStock: false },
  { category: 'Furniture', subcategory: 'Tables', productDetails: { productId: 9, name: 'Coffee Table', price: 200 }, inStock: true }
];

const output = [
  {
    category: 'Electronics',
    subcategories: [
      {
        subcategory: 'Laptops',
        products: [
          { productId: 1, name: 'MacBook Pro', price: 2500 }
        ]
      },
      {
        subcategory: 'Phones',
        products: [
          { productId: 3, name: 'iPhone 13', price: 999 },
          { productId: 4, name: 'Samsung Galaxy S21', price: 799 }
        ]
      }
    ]
  },
  {
    category: 'Home Appliances',
    subcategories: [
      {
        subcategory: 'Vacuums',
        products: [
          { productId: 6, name: 'Shark Navigator', price: 200 }
        ]
      }
    ]
  },
  {
    category: 'Furniture',
    subcategories: [
      {
        subcategory: 'Chairs',
        products: [
          { productId: 7, name: 'Ergonomic Chair', price: 300 }
        ]
      },
      {
        subcategory: 'Tables',
        products: [
          { productId: 9, name: 'Coffee Table', price: 200 }
        ]
      }
    ]
  }
];

// Each object looks like this 
// { category: 'Electronics', subcategory: 'Laptops', productDetails: { productId: 1, name: 'MacBook Pro', price: 2500 }, inStock: true },

// Use a reduce method on the output array to build the output
// Loop through each of the objects and build the categories
// After building the categories, build the subcategories
// Then only push products into the products array that are inStock

const inStockProducts = input.filter((obj) => obj.inStock).reduce((acc, obj) => {
  const { category, subcategory, productDetails } = obj;

  let productCategory = acc.find((d) => d.category === category);
  if (!productCategory) {
    productCategory = {
      category,
      subcategories: [],
    }
    acc.push(productCategory)
  }

  let productSubcategory = productCategory.subcategories.find((d) => d.subcategory === subcategory);
  if (!productSubcategory) {
    productSubcategory = {
      subcategory,
      products: [],
    }

    productCategory.subcategories.push(productSubcategory)
  }

  productSubcategory.products.push(productDetails)

  
  return acc;
}, [])

console.log(JSON.stringify(inStockProducts, null, 2))