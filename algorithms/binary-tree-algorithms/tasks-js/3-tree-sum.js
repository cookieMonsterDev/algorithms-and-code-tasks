/**
 * tree sum

Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.
 */

const treeSum = (root) => {
  if (!root) return 0;

  let sum = 0;

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    sum += node.val;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return sum;
};

//With recursion:

const treeSumRec = (root) => {
  if(!root) return 0;
  
  return root.val + treeSum(root.left) + treeSum(root.right); 
};
