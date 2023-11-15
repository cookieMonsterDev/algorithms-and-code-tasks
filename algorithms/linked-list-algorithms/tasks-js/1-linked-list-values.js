/**
linked list values

Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive! -AZ
 */

const linkedListValues = (head) => {
  if(!head) return [];
  
  const res = [];
  let current = head;
  
  while(current) {
    res.push(current.val);
    current = current.next;
  }
  
  return res;
};

//OR with recursion:

const linkedListValuesRec = (head) => {
  if(!head) return [];
  
  return getValues(head, []);
};

const getValues = (node, values) => {
  if(!node) return values;
  
  values.push(node.val);
  getValues(node.next, values);
  
  return values;
}