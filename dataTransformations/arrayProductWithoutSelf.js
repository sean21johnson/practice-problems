// Task:
// Given an array of integers nums, write a function that returns an array 
// answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// Important:
// You must solve it without using division and in O(n) time.

// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

// Input: [-1, 1, 0, -3, 3]
// Output: [0, 0, 9, 0, 0]

// The idea here is you can create a running product to the left of each element in one pass
// And then create a running product to the right of each element in the next pass
// As you go through the left from the start of nums, you reassign result[i] * the current product
// As you go through the right from the end, you reassign result[i] * the current product
// At each pass to get the new product you just multiple it by whatever the nums[i] element is

// This is a tricky problem but remember as long as you don't do a nested loop you are still only
// doing Big O(n). Multidirectional passes here are the key. Each element is essentially the product
// of all elements to the right and left of it....that's important to remember.


function productWithoutSelf(nums) {
  const result = new Array(nums.length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  console.log({result})

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  };

  return result;
}


const arr = [1, 2, 3, 4];

console.log(productWithoutSelf(arr));