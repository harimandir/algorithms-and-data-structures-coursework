// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = pyramidWithRecursion;

function pyramidWithRecursion(n, row = 1, level = "") {
  if (row > n) {
    return;
  }
  const baseWidth = 2 * n - 1;
  const midpoint = Math.floor((baseWidth + 1) / 2);
  const col = level.length + 1;

  if (col > baseWidth) {
    console.log(level);
    pyramid(n, row + 1, "");
    return;
  }

  if (col > midpoint - row && col < midpoint + row) {
    level += "#";
  } else {
    level += " ";
  }
  pyramid(n, row, level);
}

function pyramidWithRecursionAndLoop(
  n,
  row = n,
  baseWidth = 2 * n - 1,
  midpoint = Math.floor((baseWidth + 1) / 2)
) {
  if (row < 1) {
    return;
  }
  pyramid(n, row - 1, baseWidth, midpoint);
  let level = "";
  for (let col = 1; col <= baseWidth; col++) {
    if (col > midpoint - row && col < midpoint + row) {
      level += "#";
    } else {
      level += " ";
    }
  }
  console.log(level);
}

function pyramidWithNestedLoopsAndMidpoint(n) {
  let baseWidth = 2 * n - 1;
  let midpoint = Math.floor((baseWidth + 1) / 2);
  for (let row = 1; row <= n; row++) {
    let level = "";
    for (let col = 1; col <= baseWidth; col++) {
      if (col > midpoint - row && col < midpoint + row) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

function pyramidWithNestedLoops(n) {
  for (let row = 1; row <= n; row++) {
    let level = "";
    let side = n - row;
    for (let col = 1; col <= 2 * n - 1; col++) {
      if (col <= side) {
        level += " ";
      } else if (col > side + (2 * row - 1)) {
        level += " ";
      } else {
        level += "#";
      }
    }
    console.log(level);
  }
}

function pyramidWithForLoopAndRepeat(n) {
  let centerWidth = 1;
  let sideWidth = n - centerWidth;
  for (let i = 1; i <= n; i++) {
    const side = " ".repeat(sideWidth);
    const level = side + "#".repeat(centerWidth) + side;
    console.log(level);
    sideWidth--;
    centerWidth += 2;
  }
}

module.exports = pyramid;
