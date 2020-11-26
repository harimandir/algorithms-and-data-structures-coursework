// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  step(n, n);
}

function step(level, n) {
  if (level > 1) {
    step(level - 1, n);
  }
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i <= level ? "#" : " ";
  }
  console.log(str);
}

function stepsWithNestedLoops(n) {
  for (let row = 1; row <= n; row++) {
    let step = "";
    for (let col = 1; col <= n; col++) {
      step += col <= row ? "#" : " ";
    }
    console.log(step);
  }
}

function stepsWithRepeat(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i) + " ".repeat(n - i));
  }
}

module.exports = steps;
