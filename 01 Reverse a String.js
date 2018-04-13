// FreeCodeCamp - Challenge #1
// Link : https://www.freecodecamp.org/challenges/reverse-a-string

// Instructions:  
// Reverse the provided string.

// # My Solution

function reverseString(str) {
  str = str.split('').reverse().join('');  
  return str;
}

reverseString("hello");