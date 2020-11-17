// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = reverseWithArrayReduce;

function reverseWithArrayReduce(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

function reverseWithForOf(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverseWithArrayReverse(str) {
  return str.split("").reverse().join("");
}

function reverseWithCharIndex(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed += str[str.length - 1 - i];
  }
  return reversed;
}

module.exports = reverse;
