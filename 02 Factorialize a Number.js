// FreeCodeCamp - Challenge #2
// Link : https://www.freecodecamp.org/challenges/factorialize-a-number

// Instructions:  
// Return the factorial of the provided integer.

// # My Solution


function factorialize(num) {
  for ( result=1 ; num>1 ; num-=1) {
    result = result*num; 
  }
  return result;
}

factorialize(5);
