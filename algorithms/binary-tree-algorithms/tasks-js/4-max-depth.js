/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

const maxDepth = function(root) {
  if(!root) return 0;

  let maxDepthLeft = maxDepth(root.left);
  let maxDepthRight = maxDepth(root.right);

  return Math.max(maxDepthLeft, maxDepthRight) + 1
};

