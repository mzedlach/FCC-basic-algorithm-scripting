// FreeCodeCamp - Challenge #6
// Link : https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays

// Instructions:  
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// # My Solution


function largestOfFour(arr) {
  // You can do this!

  var largest = [];
  var checkedArr; 
  
  for ( i = 0 ; i < arr.length ; i++ ) {
    checkedArr = arr[i];
    var biggestNum = 0;
    
    for ( j = 0 ; j < checkedArr.length ; j++ ){
      
      if ( checkedArr[j] > biggestNum) {
        biggestNum = checkedArr[j];
      }
    }
    largest.push(biggestNum);
  }
  return largest;
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
