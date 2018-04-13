// FreeCodeCamp - Challenge #9
// Link : https://www.freecodecamp.org/challenges/truncate-a-string

// Instructions:  
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

// # My Solution


function truncateString(str, num) {
  
  if ( num <= 3 ) {
    return str.slice(0,num) + '...';
  } else if (str.length > num) {
    return str.slice(0,num-3) + '...';
  } else {
    return str;
  }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
