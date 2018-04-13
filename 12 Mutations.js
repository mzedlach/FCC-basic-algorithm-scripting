// FreeCodeCamp - Challenge #12
// Link : https://www.freecodecamp.org/challenges/mutations

// Instructions:  
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// # My Solution


function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase().split('');
  
  for ( i = 0 ; i < second.length ; i++ ) {
    for ( j = 0 ; j < second.length ; j++ ) {
      if (first.indexOf(second[j]) > -1) {
        continue; 
      } else {
        return false;
      }
    }
  }
  return true; 
}

mutation(["hello", "hey"]);
