/**
Linked list find

Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
 */

const linkedListFind = (head, target) => {
  if(!head || !target) return false;
  if(head.val === target) return true;
  
  let current = head.next;
  
  while(current) {
    if(current.val === target) return true;
    current = current.next;
  }
  
  return false;
};

//OR with recursion:

const linkedListFindRec = (head, target) => {
  if(!head || !target) return false;
  if(head.val === target) return true;
  return linkedListFind(head.next, target);
};