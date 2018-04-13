// FreeCodeCamp - Challenge #8
// Link : https://www.freecodecamp.org/challenges/repeat-a-string-repeat-a-string

// Instructions:  
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

// # My Solution


function repeatStringNumTimes(str, num) {
  
  if ( num < 0 ) { return ''; }
  
  var arr = []; 
  
  for ( var i = 0 ; i < num ; i ++) {
    arr.push(str);
  }
  return arr.join('');
}

repeatStringNumTimes("abc", 3);
