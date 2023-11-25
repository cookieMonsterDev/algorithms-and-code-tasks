/**
 * depth first values

Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

Hey. This is our first binary tree problem, so be extra sure to check out the approach video! -AZ
 */

const depthFirstValues = (root) => {
  if (!root) return [];

  const values = [];

  const stuck = [root];

  while (stuck.length > 0) {
    const node = stuck.pop();

    values.push(node.val);

    if (node.right) stuck.push(node.right);
    if (node.left) stuck.push(node.left);
  }

  return values;
};

//With recursion:

const depthFirstValuesRec = (root) => {
  if (!root) return [];

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};
