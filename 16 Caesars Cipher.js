// FreeCodeCamp - Challenge #16
// Link : https://www.freecodecamp.org/challenges/caesars-cipher

// Instructions:  
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// # My Solution

function rot13(str) { 
  var splitStr = str.split('');
  var newStr = [];
  
  for ( var i = 0 ; i < str.length ; i++ ) {
    var numVal = str.charCodeAt(i);

    if (numVal > 64 && numVal < 78) { 
      newStr.push(String.fromCharCode(numVal+13));
    } else if (numVal > 77 && numVal < 91) {
      newStr.push(String.fromCharCode(numVal-13));
    } else {
      newStr.push(str[i]);
    }
  }
      return newStr.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
