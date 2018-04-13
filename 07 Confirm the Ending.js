// FreeCodeCamp - Challenge #7
// Link : https://www.freecodecamp.org/challenges/confirm-the-ending

// Instructions:  
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// # My Solution


function confirmEnding(str, target) {  
  var startPos = str.length - target.length;
  
  if (str.substr(startPos) === target) {
    return true;
  }
  return false;  
}

confirmEnding("Bastian", "n");
