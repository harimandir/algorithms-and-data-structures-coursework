// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let node = root,
    step = "|",
    queue = [root, step],
    level = 0,
    widths = [0];
  while (queue.length > 1) {
    node = queue.shift();
    if (node === step) {
      queue.push(node);
      widths.push(0);
      level++;
    } else {
      queue.push(...node.children);
      widths[level]++;
    }
  }
  return widths;
}

module.exports = levelWidth;
