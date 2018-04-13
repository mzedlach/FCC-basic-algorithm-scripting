// FreeCodeCamp - Challenge #4
// Link : https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string

// Instructions:  
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// # My Solution

function findLongestWord(str) {
  var wordArray = str.split(' ');
  var longestWord = 0; 
  
  for (var i=0; i < wordArray.length ; i++) {
    var wordLength = wordArray[i].length;
    
    if (wordLength>longestWord) {
      longestWord = wordLength;
      continue;
    }
  }    
  return longestWord;
}

findLongestWord("May the force be with you");
