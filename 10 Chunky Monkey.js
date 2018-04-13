// FreeCodeCamp - Challenge #10
// Link : https://www.freecodecamp.org/challenges/chunky-monkey

// Instructions:  
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// # My Solution


function chunkArrayInGroups(arr, size) {
  var newArr = []; 
  
  for (var i = 0 ; i < arr.length ; i = i + size) {
    var portion = arr.slice(i,i+size);
    newArr.push(portion);
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);