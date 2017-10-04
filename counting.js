function countLetters(wordToCount) {
  var finalObject = {};

  for(var i = 0; i < wordToCount.length; i++) {
    var letter = wordToCount[i];

    if(letter !== ' ') {

      if(finalObject[letter] === undefined) {
        finalObject[letter] = 1;

      } else {
        finalObject[letter] += 1;
      }
    }
  }

  return finalObject;
}

console.log(countLetters("lighthouse in the house"));