// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = maxCharWithObject;

function maxCharWithObject(str) {
  const map = {};
  for (const char of str.split("")) {
    map[char] = map[char]++ || 1;
  }

  let maxVal = 0,
    maxChar = "";
  for (const char in map) {
    if (map[char] > maxVal) {
      maxVal = map[char];
      maxChar = char;
    }
  }
  return maxChar;
}

function maxCharWithMap(str) {
  const map = new Map();
  for (const char of str.split("")) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  let maxVal = 0,
    maxChar = "";
  for (const [char, val] of map) {
    if (val > maxVal) {
      maxVal = val;
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
