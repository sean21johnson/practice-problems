// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target
    function twoNums(nums, target) {
      const map = {};
    
      for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
    
        if (difference in map) {
          return [map[difference], i];
        }
    
        map[nums[i]] = i;
      }
    
      return [];
    }
    

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoNums(nums, target))