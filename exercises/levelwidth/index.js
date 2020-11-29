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
  let prev,
    node = root,
    step = "|",
    queue = [root, step],
    level = 0,
    widths = [];
  while (node) {
    node = queue.shift();
    if (node === prev) {
      break;
    }
    prev = node;
    if (node === step) {
      queue.push(node);
      level++;
    } else {
      queue.push(...node.children);
      widths[level] = (widths[level] || 0) + 1;
    }
  }
  return widths;
}

module.exports = levelWidth;
