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
    queue = [root],
    i = 0;
  while (node) {
    queue.push(...node.children);
    node = queue[++i];
  }
  let widths = [1],
    level = 0;
  node = queue.shift();
  while (node) {
    if (node.children.length) {
      widths[level + 1] = node.children.length;
    }
    for (i = 1; i < widths[level]; i++) {
      if (queue[0]?.children.length) {
        widths[level + 1] += queue[0].children.length;
      }
      node = queue.shift();
    }
    level++;
    node = queue.shift();
  }
  return widths;
}

module.exports = levelWidth;
