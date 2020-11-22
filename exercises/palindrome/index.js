// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = palindromeWithArrayIndex;

function palindromeWithArrayIndex(str) {
  let isPalindrome = false;
  const arr = str.split("");
  for (let i = 0; i < Math.floor((arr.length + 1) / 2); i++) {
    if (arr[i] === arr[arr.length - 1 - i]) {
      isPalindrome = true;
    } else {
      return false;
    }
  }
  return isPalindrome;
}

function palindromeWithArrayEvery(str) {
  return str
    .split("")
    .every((char, i, arr) => char === arr[arr.length - 1 - i]);
}

function palindromeWithArrayReverse(str) {
  return str === str.split("").reverse().join("");
}

module.exports = palindrome;
