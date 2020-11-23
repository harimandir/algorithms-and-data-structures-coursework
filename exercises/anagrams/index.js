// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const mapA = strToCharObj(stringA.replace(/\W/g).toLowerCase());
  const mapB = strToCharObj(stringB.replace(/\W/g).toLowerCase());

  let diff = mapA.length !== mapB.length;
  if (!diff) {
    for (const char in mapA) {
      if (mapA[char] !== mapB[char]) {
        diff = true;
        break;
      }
    }
  }
  return !diff;
}

function strToCharObj(str) {
  let map = {};
  for (const char of str) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

function anagramsWithMapComparison(stringA, stringB) {
  const mapA = strToCharMap(stringA.replace(/\W/g).toLowerCase());
  const mapB = strToCharMap(stringB.replace(/\W/g).toLowerCase());

  let diff = mapA.size !== mapB.size;
  if (!diff) {
    for (const [char, count] of mapA) {
      if (mapB.get(char) !== count) {
        diff = true;
        break;
      }
    }
  }
  return !diff;
}

function strToCharMap(str) {
  let map = new Map();
  for (const char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
}

function anagramsWithArraySort(stringA, stringB) {
  return (
    strToLowerCaseSortedChars(stringA) === strToLowerCaseSortedChars(stringB)
  );
}

function strToLowerCaseSortedChars(str) {
  return str.replace(/\W/g).toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
