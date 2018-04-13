// FreeCodeCamp - Challenge #3
// Link : https://www.freecodecamp.org/challenges/check-for-palindromes

// Instructions:  
// Return true if the given string is a palindrome. Otherwise, return false.

// # My Solution


function palindrome(str) {
  var filteredString = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
  var reverseString = filteredString.split('').reverse().join('');
  
  if (filteredString === reverseString) {
    return true;
  }
  return false;
}



palindrome("race car");

