// FreeCodeCamp - Challenge #13
// Link : https://www.freecodecamp.org/challenges/falsy-bouncer

// Instructions:  
// Remove all falsy values from an array.

// # My Solution


function bouncer(arr) {
  return arr.filter(Boolean);  
}

bouncer([7, "ate", "", false, 9]);


