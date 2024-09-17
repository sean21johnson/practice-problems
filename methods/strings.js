/*
  -Remember that strings are primitives and are immutable
  -You cannot change a string, you can only create a new string
  -Strings are passed by VALUE, not by reference

  - When you assign a string to a variable, the variable holds the value of that string directly.
  - If you assign that string to another variable, a copy of the string’s value is made. The two variables are independent; 
    changes to one will not affect the other.
  - Remember that you can always reassign the original string though. This is typically what you'd do if the contents of the
    old string are no longer needed.

  - indexOf
    -See if an instance of a string exists in another string
    -Will return the index of where the string occurs
    -Will return -1 if it does not occur 
    -str.indexOf(subStr)

  - \n
    -Newline character
    -Can you template literals instead to create a new line too
  
  - \
    -Escape character which lets you use special characters in a string
    -Example: 'I\'ve got something to say'
  
  - String()
    -Convert something to a string

  - .length property
    -Remember that strings are Objects so you can use a lot of built-in Object functionality
    -Gives you the length of a string

  - Bracket notation str[2];
    -Gives you access to the 3rd character in the string (remember it is 0-index based)

  - str[str.length - 1];
    -Always gives you access to the last chracter in the string

  - .includes method
    -Returns boolean depending if the string includes the substring passed in as an argument

  - .startsWith
    -Returns boolean depending if the string begins with the substring passed in

  - .endsWith
    -Returns boolean depending if the string ends with the substring passed in

  - .indexOf(subStr, startingElToBeginSearch)
    -Search if a string contains a given substring and optionall beginning at a startingElToBeginSearch
    -Returns the first element where the subStr begins
    -If it does not contain the subStr, returns -1
  
  - .slice(whereToBegin, whereToEnd)
    -Extract a subStr from a string
    -First arg is where to start extracting, second arg is where to stop extracting (does not include this element in the substr)
    -If you leave the second arg out, it will just extract to the end of the string

  - .toUpperCase
    -Makes all letters upper case
  
  - .toLowerCase
    -Makes all letters lower case

  - .replace(instanceInStr, replaceWithStr)
    -Takes an instance in the string and replaces it with something else. Only the first occurance though!
    -Remember you have to create a new variable to get the new result
    -You can't modify the string directly, because it is a primitive and immutable!
    -Although, you do have the option to reassign the original string...you'd probably end up doing this usually

  . replaceAll(instanceInStr, replaceWithStr)
    -Same as above except it replaces all instance instead of just the first one

*/