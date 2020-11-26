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

const steps = stepsRecursiveWithoutLoop;

function stepsRecursiveWithoutLoop(n, level = 1, step = "") {
  if (level > n) {
    return;
  }

  if (step.length >= n) {
    console.log(step);
    steps(n, ++level);
    return;
  }

  const col = step.length < level ? "#" : " ";
  steps(n, level, step + col);
}

function stepsRecursiveWithForLoop(n, level = n) {
  if (level <= 0) {
    return;
  }
  steps(n, level - 1);

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
