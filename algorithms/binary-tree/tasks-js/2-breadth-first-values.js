/**
 * breadth first values

Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.
 */

const breadthFirstValues = (root) => {
  if(!root) return []
  
  const values = []
  
  const q = [root];
  
  while(q.length > 0) {
    const node = q.shift();
      
    values.push(node.val);
    
    if(node.left) q.push(node.left)
    if(node.right) q.push(node.right)
  }
  
  return values;
};
