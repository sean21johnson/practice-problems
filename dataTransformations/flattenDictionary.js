// Given a nested dictionary (object), write a function that flattens it. 
// The keys in the flattened dictionary should be a concatenation of the keys 
// in the original nested dictionary, separated by dots (.).

// Input: {
//   "key1": "value1",
//   "key2": {
//     "key3": "value3",
//     "key4": {
//       "key5": "value5"
//     }
//   }
// }

// Output: {
//   "key1": "value1",
//   "key2.key3": "value3",
//   "key2.key4.key5": "value5"
// }

const dictionary = {
  "key1": "value1",
  "key2": {
    "key3": "value3",
    "key4": {
      "key5": "value5"
    }
  }
}

function flattenDictionary(obj, parentKey = '', result = {}) {
  for (let key in obj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;  // Build the new key
      const isObj = typeof obj[key] === 'object' && obj[key] !== null;

      if (isObj) {
        // If the current value is an object, recurse with the new key as the parentKey
        flattenDictionary(obj[key], newKey, result);
      } else {
        // If it's not an object, add it to the result with the constructed key
        result[newKey] = obj[key];
      }
  }

  return result;
}


console.log(flattenDictionary(dictionary))