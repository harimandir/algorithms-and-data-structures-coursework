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

function pyramid(n) {
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
