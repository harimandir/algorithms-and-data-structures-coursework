// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = new Map();
  for (char of str.split("")) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  let maxVal = 0,
    maxChar = "";
  for ([char, val] of map) {
    if (val > maxVal) {
      maxVal = val;
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
