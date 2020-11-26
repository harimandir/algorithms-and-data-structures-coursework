// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = vowelsWithArrayIndexLoop;

function vowelsWithArrayIndexLoop(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (["a", "e", "i", "o", "u"].indexOf(char) >= 0) {
      count++;
    }
  }
  return count;
}

function vowelsWithMatchAll(str) {
  return [...str.matchAll(/[aeiou]/gi)].length;
}

module.exports = vowels;
