// Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"
// Output: true

// Input: "()[]{}"
// Output: true

// Input: "(]"
// Output: false

// Input: "([)]"
// Output: false

// Input: "{[]}"
// Output: true

// Solution
// Create an array of the openers
// Create a dictionary of the closer-opener key-pair values
// Create an empty stack which you can use to check stuff
  // Remember to use either push/pop or shift/unshift. You need to know the most recent element added
// Loop through characters and push characters that are openers onto the stack
// If you encounter a closer:
  // Confirm that the stack has length (indicating that the closer had been previously opened)
  // Confirm that the top of the stack matches the opener and then pop it off
// After you complete the loop, return true if the stack is empty and false if it has length
const validParenthesis = (str) => {
  const openers = ['{', '[', '('];
  const map = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  const stack = [];

  for (let char of str) {
    if (openers.includes(char)) {
      stack.push(char);
    } else if (stack.length === 0 || map[char] !== stack.pop()) {
        return false;
      }
  }

  return stack.length ? false : true;
};

const input = '[{}}]';

console.log(validParenthesis(input));
