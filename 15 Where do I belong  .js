// FreeCodeCamp - Challenge #15
// Link : https://www.freecodecamp.org/challenges/where-do-i-belong

// Instructions:  
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// # My Solution


function getIndexToIns(arr, num) {

  var sortedArr = arr.sort(function(a,b) {
    return a-b;
  });
  
  for ( var i = 0 ; i <= arr.length ; i++ ) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
  
}

getIndexToIns([2, 5, 10], 15);
