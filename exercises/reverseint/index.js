// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = reverseIntWithMathSign;

function reverseIntWithMathSign(n) {
  const reversed = n.toString().split("").reverse().join("");
  return Math.sign(n) * parseInt(reversed, 10);
}

function reverseIntWithTernary(n) {
  const reversed = n.toString().split("").reverse().join("");
  return (n < 0 ? -1 : 1) * parseInt(reversed, 10);
}

module.exports = reverseInt;
