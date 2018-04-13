// FreeCodeCamp - Challenge #5
// Link : https://www.freecodecamp.org/challenges/title-case-a-sentence

// Instructions:  
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// # My Solution

function titleCase(str) {
// changes sting into array of words in all lower case
  var newArr = str.toLowerCase().split(' ');
// An array to hold words that have been converted to proper format
  var arrayOfWords = [];

// For every word in newArr array, one word at a time is taken, split, first letter chagned to capital, and then pushed to the holding array called arrayOfWords
  for ( i=0 ; i<newArr.length ; i++ ) {
    var oneWord = newArr[i]; 
    var letters = oneWord.split(''); 
    var capitalizedWord = letters[0].toUpperCase() + oneWord.slice(1);

    arrayOfWords.push(capitalizedWord);
  }
  return arrayOfWords.join(' ');
}

titleCase("I'm a little tea pot");
