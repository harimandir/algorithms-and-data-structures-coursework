const vowels = require("./index");

test("Vowels is a function", () => {
  expect(typeof vowels).toEqual("function");
});

test("returns the number of vowels used", () => {
  expect(vowels("aeiouaeiou")).toEqual(10);
});

test("returns the number of vowels used when they are capitalized", () => {
  expect(vowels("AEIOU")).toEqual(5);
});

test("returns the number of vowels used", () => {
  expect(vowels("abcdefghijklmnopqrstuvwxyzaa")).toEqual(7);
});

test("returns the number of vowels used", () => {
  expect(vowels("bcdfghjkl")).toEqual(0);
});
