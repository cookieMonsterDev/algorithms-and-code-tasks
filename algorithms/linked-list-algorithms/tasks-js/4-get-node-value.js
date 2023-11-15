/**
Get node value

Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.
 */

const getNodeValue = (head, index) => {
  if(!head) return null;
  if(index < 0) return null;
  if(index === 0) return head.val;
  
  let current_index = 0;
  let current_node = head;
  
  while(current_node) {
    if(index === current_index) return current_node.val;
    
    current_node = current_node.next;
    current_index++
  }
  
  return null
};

//OR with recursion:

const getNodeValueRec = (head, index) => {
  if(!head) return null;
  if(index < 0) return null;
  if(index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};